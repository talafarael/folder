#include <iostream>
#include <filesystem>
#include <string>

 const int number=4;
const int jumpFol=10;
 
void rec(int num,int jump,std::string path){
namespace fs = std::filesystem;
std::string dir = path + "/dir"+std::to_string(num) ;
 if(num==0){
        return ;
    }
    if(jump==-1){
        
        return ;
    }
if(jump!=-1){
    fs::create_directories(dir);
}
int math;
  std::string dir="./";
 if(math==1&&jump!=jumpFol){

        //create file
    }
    
  rec(number,jump=jump-1,dir);
    num--;
    rec(num,jump+1,path);
}
int main(){
    std::cout<<"Aaa";
//  rec(5);
return ;
}