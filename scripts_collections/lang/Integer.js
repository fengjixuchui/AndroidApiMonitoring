/**
 * Created by maomao on 2020/4/23.
 */
Java.perform(function() {
    var cn = "java.lang.Integer";
    var target = Java.use(cn);
    if (target) {
        target.byteValue.implementation = function(dest) {
            var myArray=new Array()
            myArray[0] = "INTERESTED"  //INTERESTED & SENSITIVE
            myArray[1] = cn + "." + "byteValue";
            myArray[2] = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()).split('\n\tat');
            console.log(myArray);
            return this.byteValue.apply(this, arguments);
        };
    }
});