/**
 * Created by maomao on 2020/4/20.
 */
Java.perform(function() {
    var cn = "android.os.HandlerThread";
    var target = Java.use(cn);
    if (target) {
        target.isAlive.implementation = function(dest) {
            var myArray=new Array()
            myArray[0] = "INTERESTED"  //INTERESTED & SENSITIVE
            myArray[1] = cn + "." + "isAlive";
            myArray[2] = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()).split('\n\tat');
            console.log(myArray);
            return this.isAlive.apply(this, arguments);
        };
    }
});