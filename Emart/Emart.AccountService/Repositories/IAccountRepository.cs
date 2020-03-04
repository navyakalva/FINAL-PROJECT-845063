using Emart.AccountService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountService.Repositories
{
    public interface IAccountRepository
    {
       
        //Buyer Getbyid(int id);
       public Buyer BuyerLogin(string uname, string pwd);
       public  Seller SellerLogin(string uname, string pwd);
       public void BuyerRegister(Buyer obj);
       public void SellerRegister(Seller obj);
        
    }
}
