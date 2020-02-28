using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminService.Models;
using Emart.AdminService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _repo;
        public AdminController(IAdminRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddCategory")]
        public void AddCategory(Category obj)
        {
            _repo.AddCategory(obj);
        }
        [HttpPost]
        [Route("AddSubCategory")]
        public void AddSubCategory(SubCategory obj)
        {
            _repo.AddSubCategory(obj);
        }
        [HttpGet]
        [Route("getcategory/{category_id}")]
        public IActionResult GetCategory(int category_id)
        {
            return Ok(_repo.GetById(category_id));
        }
        [HttpGet]
        [Route("getsubcategory/{subcategory_id}")]
        public IActionResult GetSubCategory(int subcategory_id)
        {
            return Ok(_repo.GetBySid(subcategory_id));
        }
        [HttpGet]
        [Route("GetAllCategories")]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repo.GetAllCategories());
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetAllSubCategories")]
        public IActionResult GetSub()
        {
            try
            {
                return Ok(_repo.GetAllSubCategories());
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCat/{id}")]
        public void DeleteCat(int id)
        {
            _repo.DeleteCat(id);
        }
        [HttpPut]
        [Route("UpdateCat")]
        public void UpdateCat(Category obj)
        {
            _repo.UpdateCat(obj);
        }
        [HttpDelete]
        [Route("DeleteSub/{id}")]
        public void DeleteSub(int id)
        {
            _repo.DeleteSub(id);
        }
        [HttpPut]
        [Route("UpdateSub")]
        public void UpdateSub(SubCategory obj)
        {
            _repo.UpdateSub(obj);
        }
    }
}