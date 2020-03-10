using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.BuyerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyerController : ControllerBase
    {
        private readonly IBuyerRepository _repo;
        public BuyerController(IBuyerRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddItem")]
        public void Buyitem(PurchaseHistory obj)
        {
            _repo.Buyitem(obj);
        }

        [HttpPut]
        [Route("editbuyerprofile")]
        public void Editprofile(Buyer obj)
        {
            _repo.Editbuyerprofile(obj);

        }
        [HttpGet]
        [Route("getprofile/{id}")]
        public IActionResult Getprofile(int id)
        {
            try
            {
                return Ok(_repo.Getprofile(id));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet]
        [Route("search/{item_name}")]
        public IActionResult Searchitem(string item_name)
        {
            try
            {
                return Ok(_repo.Searchitems(item_name));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("Transactionhistory/{id}")]
        public IActionResult Transactionhistory(int id)
        {
            try
            {
                return Ok(_repo.Transactionshistory(id));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetCategory")]
        public IActionResult GetCategory()
        {
            try
            {
                return Ok(_repo.GetCategory());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

        }
        [HttpGet]
        [Route("GetSubCategory/{category_id}")]
        public IActionResult GetSubCategory(int category_id)
        {
            try
            {
                return Ok(_repo.GetSubCategory(category_id));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetCart")]
        public IActionResult GetCart()
        {
            try
            {
                return Ok(_repo.GetCart());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

        }
        [HttpPost]
        [Route("Addtocart")]
        public void Addtocart(Cart obj)
        {
            _repo.AddToCart(obj);
        }
        [HttpDelete]
        [Route("Deletefromcart/{id}")]
        public void Delete(int id)
        {
            _repo.DeleteFromCart(id);
        }


    }
}