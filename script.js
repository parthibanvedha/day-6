class person {
  constructor(name,father_name,aadhar_no,mother_name,gender,address,mobile_No,Email) {
    this.name = name ;
    this.father_name = father_name ;
    this.mother_name = mother_name;
    this.aadhar_no = aadhar_no;
    this.gender = gender; ;
    this.address = address ;
    this.mobile_No = mobile_No; ;
    this.Email = Email;
 }
  person_name() {
    return `my name is  ${this.name}`;
  }

  person_father_name() {
    return `my father name is ${this.father_name}`;
  }
  person_mother_name() {
    return `my mother name is ${this.mother_name}`;
  }
  person_aadhar_no() {
    return `aadhar_no  is ${this.aadhar_no}`;
  }
  person_gender() {
    return `i am ${this.gender}`;
  }
  person_address() {
    return `my addressis ${this.adress}`;
  }
  person_mobile_no() {
    return `my mobile_no is ${this.mobile_No}`;
  }
  person_Email() {
    return `my email is ${this.Email}`;
  }
}
//object
const my_obj = new person("parthiabn","kumar","vedhavalli","2000-2000-2000","M","home","56789","kparthi@gmail.com");

console.log(my_obj.person_name());
console.log(my_obj.person_father_name());
console.log(my_obj.person_mother_name());
console.log(my_obj.person_aadhar_no());

console.log(my_obj.person_gender());
console.log(my_obj.person_address());
console.log(my_obj.person_mobile_no());
console.log(my_obj.person_Email());

// output-
// my name is parthiban
// my father name is kumar
// my mother name is vedhavalli
// my aadhar no is 2000-2000-2000
// i am male
// my adress is home
// my mobile no is 56789
// my email is kparthi@gmail.com

// 4)write a class to calculate uber price.


       class UberPriceCalculator{
    constructor(CRD,SBM,basefare,CPM,TR,ridedistance,bookingfee){
        
        this.CRD=CRD;
        this.SBM=SBM;
        this.basefare=basefare;
        this.CPM=CPM;
        this.TR=TR;
        this.ridedistance=ridedistance
        this.bookingfee=bookingfee;

    }
    getprice(){
        console.log("  PRICE IS "+(this.basefare + ((this.CPM * this.TR) + (this.CRD* this.ridedistance) *this.SBM) + this.bookingfee ))
    }
    
     setprice(newCRD,newSBM,newbasefare,newCPM,newTR,newridedistance,newbookingfee){
            
            this.CRD=newCRD;
            this.SBM=newSBM;
            this.basefare=newbasefare;
            this.CPM=newCPM;
            this.TR=newTR;
            this.ridedistance=newridedistance
            this.bookingfee=newbookingfee;
    
        }    
}
var cost1=new UberPriceCalculator();
cost1.setprice(100,5,20,15,10,3,20)
cost1.getprice()