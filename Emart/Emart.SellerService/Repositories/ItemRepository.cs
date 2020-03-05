using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.Repositories
{
    public class ItemRepository : IItemRepository
    {
        private readonly EmartDBContext _context;
        public ItemRepository(EmartDBContext context)
        {
            _context = context;
        }
        public void AddItems(Items obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }
        public List<Items> GetAllItems()
        {
            return _context.Items.ToList();
        }

        public void DeleteItems(int id)
        {
            Items i = _context.Items.Find(id);
            _context.Remove(i);
            _context.SaveChanges();
        }

        public Items GetItems(int id)
        {
            return _context.Items.Find(id);
        }

        public void UpdateItems(Items obj)
        {
            //Items i = new Items();
            //i.Price = obj.Price;
            //i.ItemName = obj.ItemName;
            //i.StockNumber = obj.StockNumber;
            //i.Description = obj.Description;
            //i.Id = obj.Id;
            _context.Items.Update(obj);
            _context.SaveChanges();
        }

        public List<Items> ViewItems(int sid)
        {
            return _context.Items.Where(e=>e.Id==sid).ToList();
        }
        public List<Category> GetAllCategories()
        {
            return _context.Category.ToList();
        }

        public List<SubCategory> GetSubCategories(int category_id)
        {
            return _context.SubCategory.Where(e => e.CategoryId == category_id).ToList();
        }
    }
}
