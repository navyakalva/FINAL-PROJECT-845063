using Emart.AccountService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountService.Repositories
{
    public interface IAccountRepository
    {
       
        Buyer Getbyid(int id);
        bool BuyerLogin(string uname, string pwd);
        bool SellerLogin(string uname, string pwd);
        void BuyerRegister(Buyer obj);
        void SellerRegister(Seller obj);
        
    }
}
