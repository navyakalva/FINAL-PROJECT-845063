using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemRepository _repo;
        public ItemController(IItemRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddItems")]
        public IActionResult AddItems(Items obj)
        {
            try
            {
                _repo.AddItems(obj);
                return Ok();
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("ViewItems/{sid}")]
        public IActionResult ViewItems(int sid)
        {
            try
            {
                return Ok(_repo.ViewItems(sid));
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("Delete/{id}")]
        public void DeleteItems(int id)
        {
            _repo.DeleteItems(id);
        }
        [HttpPut]
        [Route("Update")]
        public void UpdateItems(Items obj)
        {
            _repo.UpdateItems(obj);
        }
        [HttpGet]
        [Route("GetItems/{id}")]
        public IActionResult GetItems(int id)
        {
            try
            {
                return Ok(_repo.GetItems(id));
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }

    }
}