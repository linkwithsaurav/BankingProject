var id = (function(){
    
    return {
        obj:{
            accBalance : $('#AB'),
            lastDeposit : $('#LD'),
            lastWithdraw : $('#LW'),
            typeTransact : $('#transact'),
            modePayment : $('#type1'),
            amount : $('#amt2'),
            submit : $('#btn'),
            table : $('#divTable')
        }
    }
})();

var Controller = (function(id){

    var array = new Array();
    array.push(["S.no","MODE","TYPE","AMOUNT"])
    var initialBal = 1000;
    var type = id.obj.typeTransact;
    var mode = id.obj.modePayment;
    var amt = id.obj.amount;
    var value = id.obj.accBalance;
    var ld = id.obj.lastDeposit;
    var lw = id.obj.lastWithdraw;
    var trow = 0;

    id.obj.submit.click(()=>{
        if(amt.val().search('[0]{2}[0-9]*') === 0){
            alert("Invalid type of amount");
        }
        else if(type.val() === 'none' || mode.val() === 'none'){
            alert("Please enter the transaction details");
        }else{
            switch (type.val()) {

                case 'Deposit':
                    initialBal = parseInt(initialBal) + parseInt(amt.val());
                    document.getElementById('AB').innerHTML = `${initialBal}`;
                    document.getElementById('LD').innerHTML = `${amt.val()}`;
                    ++trow;
                    array.push([`${trow},${mode.val()},${type.val()},${initialBal}`]);                    
                    break;
                    
                case 'Withdraw':
                    if(Number(amt.val()) > Number(initialBal)){
                        alert("Insufficient Balance");
                    }else{
                        initialBal=parseInt(initialBal) - parseInt(amt.val());
                        document.getElementById('AB').innerHTML = `${initialBal}`;
                        document.getElementById('LW').innerHTML = `${amt.val()}`;
                        ++trow;
                        array.push([`${trow},${mode.val()},${type.val()},${initialBal}`]);            
                    }
                    break;            
            }
        }
        return{
            data:{
                arr : array
            }
        }
    })
})(id);

var ViewLogic = (function(id,Controller){
    
}(id,Controller));


