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
        public IActionResult AddCategory(Category obj)
        {
            try
            {
                _repo.AddCategory(obj);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
           
        }
        [HttpPost]
        [Route("AddSubCategory")]
        public IActionResult AddSubCategory(SubCategory obj)
        {
            try
            {
                _repo.AddSubCategory(obj);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
           
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
        public IActionResult DeleteCat(int id)
        {
            try
            {
                _repo.DeleteCat(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
           
        }
        [HttpPut]
        [Route("UpdateCat")]
        public IActionResult UpdateCat(Category obj)
        {
            try
            {
                _repo.UpdateCat(obj);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
           
        }
        [HttpDelete]
        [Route("DeleteSub/{id}")]
        public IActionResult DeleteSub(int id)
        {
            try
            {
                _repo.DeleteSub(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
          
        }
        [HttpPut]
        [Route("UpdateSub")]
        public IActionResult UpdateSub(SubCategory obj)
        {
            try
            {
                _repo.UpdateSub(obj);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
           
        }
    }
}