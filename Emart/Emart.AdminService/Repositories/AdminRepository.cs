using Emart.AdminService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminService.Repositories
{
    public class AdminRepository:IAdminRepository
    {
        private readonly EmartDBContext _context;
        public AdminRepository(EmartDBContext context)
        {
            _context = context;
        }
        public void AddCategory(Category obj)
        {
            _context.Category.Add(obj);
            _context.SaveChanges();

        }

        public void AddSubCategory(SubCategory obj)
        {
            _context.SubCategory.Add(obj);
            _context.SaveChanges();

        }

        public SubCategory GetBySid(int subcategory_id)
        {
            return _context.SubCategory.Find(subcategory_id);
        }

        public Category GetById(int category_id)
        {
            return _context.Category.Find(category_id);
        }
        public List<Category> GetAllCategories()
        {
            return _context.Category.ToList();
        }
        public List<SubCategory> GetAllSubCategories()
        {
            return _context.SubCategory.ToList();
        }
        public void DeleteCat(int id)
        {
            Category i = _context.Category.Find(id);
            _context.Remove(i);
            _context.SaveChanges();
        }
        public void UpdateCat(Category obj)
        {
            _context.Category.Update(obj);
            _context.SaveChanges();
        }
        public void DeleteSub(int id)
        {
            SubCategory i = _context.SubCategory.Find(id);
            _context.Remove(i);
            _context.SaveChanges();
        }
        public void UpdateSub(SubCategory obj)
        {
            _context.SubCategory.Update(obj);
            _context.SaveChanges();
        }
    }
}
