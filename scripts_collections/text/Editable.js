/**
 * Created by maomao on 2020/4/20.
 */
Java.perform(function() {
    var cn = "android.text.Editable";
    var target = Java.use(cn);
    if (target) {
        target.toString.implementation = function(dest) {
            var myArray=new Array()
            myArray[0] = "INTERESTED"  //INTERESTED & SENSITIVE
            myArray[1] = cn + "." + "toString";
            myArray[2] = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()).split('\n\tat');
            console.log(myArray);
            return this.toString.apply(this, arguments);
        };
    }
});