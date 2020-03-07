using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.BuyerService.Repositories
{
   public interface IBuyerRepository
    {
        List<Items> Searchitems(string item_name);
        void Buyitem(PurchaseHistory obj);
        void Editbuyerprofile(Buyer obj);
        Buyer Getprofile(int id);
        List<PurchaseHistory> Transactionshistory(int id);
        List<Category> GetCategory();
        List<SubCategory> GetSubCategory(int category_id);
        void AddToCart(Cart obj);
        void DeleteFromCart(int itemid);
        List<Cart> GetCart();
    }
}
