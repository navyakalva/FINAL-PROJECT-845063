using Emart.AdminService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminService.Repositories
{
   public interface IAdminRepository
    {
        List<Category> GetAllCategories();
        List<SubCategory> GetAllSubCategories();
        public void DeleteCat(int id);
        public void UpdateCat(Category obj);
        public void DeleteSub(int id);
        public void UpdateSub(SubCategory obj);
        void AddCategory(Category obj);
        void AddSubCategory(SubCategory obj);
        Category GetById(int category_id);
        SubCategory GetBySid(int subcategory_id);
    }
}
