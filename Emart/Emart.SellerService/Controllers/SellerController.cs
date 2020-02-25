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
    public class SellerController : ControllerBase
    {
        private readonly ISellerRepository _repo;
        public SellerController(ISellerRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("GetSellerProfile/{id}")]
        public IActionResult GetSellerProfile(int id)
        {
            try
            {
                return Ok(_repo.GetSellerProfile(id));
            }
            catch (Exception e)
            {
                return Ok(e.Message);
            }
        }
        [HttpPut]
        [Route("EditProfile")]
        public IActionResult EditProfile(Seller obj)
        {
            try
            {
                _repo.EditProfile(obj);
                return Ok();
            }
            catch (Exception e)
            {
                return Ok(e.Message);
            }
        }

    }
}