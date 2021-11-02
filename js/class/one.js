class bank_cust{
    min_bal=500;                                        //property
    open_account(){
        console.log("Account opened successfully");     //method
    }
    deposit_details(){
        console.log("No deposit yet");                  //method
    }
    check_bal(){
        console.log("Minimun balance is zero");         //method
    }
    close_account(){
        console.log("Account has been closed succesfully");     //method
    }
}
let c1=new bank_cust();                                 //c1 is a reference object
console.log(c1.min_bal);                                //invoke property
c1.open_account();                                      //invoke method
c1.deposit_details();                                   //invoke method
c1.check_bal();                                         //invoke method
c1.close_account();                                     //invoke method
