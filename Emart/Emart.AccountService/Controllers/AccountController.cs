using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AccountService.Models;
using Emart.AccountService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository _repo;
        public AccountController(IAccountRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("BuyerLogin/{uname}/{pwd}")]
        public IActionResult BuyerLogin(string uname, string pwd)
        {
            try
            {
                return Ok(_repo.BuyerLogin(uname, pwd));
            }
            catch (Exception e)
            {
                return Ok(e.Message);
            }
        }
        [HttpGet]
        [Route("SellerLogin/{uname}/{pwd}")]
        public IActionResult SellerLogin(string uname, string pwd)
        {
            try
            {
                return Ok(_repo.SellerLogin(uname, pwd));
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("SellerRegister")]
        public IActionResult SellerRegister(Seller obj)
        {
            try
            {
                _repo.SellerRegister(obj);
                return Ok();
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("BuyerRegister")]
        public IActionResult BuyerRegister(Buyer obj)
        {
            try
            {
                _repo.BuyerRegister(obj);
                return Ok();
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("Getbyid/{id}")]
        public IActionResult Getbyid(int id)
        {
            try
            {
                return Ok(_repo.Getbyid(id));
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }


    }
}
