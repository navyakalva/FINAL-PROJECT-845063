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
    }
}
