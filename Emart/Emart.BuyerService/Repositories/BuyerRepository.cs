using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.BuyerService.Repositories
{
    public class BuyerRepository : IBuyerRepository
    {
        private readonly EmartDBContext _context;
        public BuyerRepository(EmartDBContext context)
        {
            _context = context;

        }
        public void Buyitem(PurchaseHistory obj)
        {
            _context.PurchaseHistory.Add(obj);
            _context.SaveChanges();
        }

        public void Editbuyerprofile(Buyer obj)
        {
            _context.Update(obj);
            _context.SaveChanges();
        }

        public List<Category> GetCategory()
        {
            return _context.Category.ToList();
        }

        public Buyer Getprofile(int id)
        {
            return _context.Buyer.Find(id);
        }

        public List<SubCategory> GetSubCategory(int category_id)
        {
            return _context.SubCategory.Where(e => e.CategoryId == category_id).ToList();
        }

        public List<Items> Searchitems(string item_name)
        {
            return _context.Items.Where(e => e.ItemName == item_name).ToList();
        }

        public List<PurchaseHistory> Transactionshistory(int id)
        {
            return _context.PurchaseHistory.Where(e => e.BuyerId == id).ToList();
        }
        public List<Cart> GetCart()
        {
            return _context.Cart.ToList();
        }
         public void DeleteFromCart(int itemid)
        {
            Cart c = _context.Cart.Find(itemid);
            _context.Remove(c);
            _context.SaveChanges();
        }

        public void AddToCart(Cart obj)
        {
            _context.Cart.Add(obj);
            _context.SaveChanges();
        }

    }
}
