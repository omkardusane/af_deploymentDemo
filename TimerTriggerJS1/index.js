module.exports = function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    if(myTimer.isPastDue)
    {
        context.log('hello world , You are watching Omkar\'s web series on azure functions');
    }
    context.log('JavaScript timer trigger function ran!', timeStamp);   
    
    context.done();
};
