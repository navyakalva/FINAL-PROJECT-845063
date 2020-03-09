using System;
using System.Collections.Generic;
using System.Text;
using Emart.AccountService.Models;
using Emart.AccountService.Repositories;
using NUnit.Framework;

namespace Emart.Test
{
    [TestFixture]
    class TestAccountService
    {
        AccountRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AccountRepository(new EmartDBContext());
        }
        [Test]
        [Description("to test add seller")]
        public void TestAddSeller()

        {
            _repo.SellerRegister(new Seller()
            {
                Id = 12,
                Username = "prasu",
                Password = "chinna",
                Companyname = "infosys",
                Contactno = "9000326398",
                Emailid = "prasu@123.com",
                Gstin = "90",
                BriefAboutcompany = "good",
                Website = "www.infosys.com",
                PostalAddress = "karamchedu"


            });
        }
        [Test]
        [Description("to test add buyer")]
        public void AddBuyer()
        {
            _repo.BuyerRegister(new Buyer()
            {
                Id = 123,
                Createddatetime = System.DateTime.Now,
                Username = "sus",
                Password = "sushmi",
                Emailid = "sus@gmail.com",
                Mobileno = "8142070133"
            });
        }
        [Test]
        [Description("to check seller login")]
        public void TestSellerLogin()
        {
            var result = _repo.SellerLogin("seller2", "seller2");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("to check Buyer login")]
        public void TestBuyerLogin()
        {
            var result = _repo.BuyerLogin("buyer", "buyer");
            Assert.IsNotNull(result);
        }


    }
}
