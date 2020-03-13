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
                Id = 65,
                Username = "mani",
                Password = "mani",
                Companyname = "infosys",
                Contactno = "9000326398",
                Emailid = "mani@gmail.com",
                Gstin = "90",
                BriefAboutcompany = "good",
                Website = "www.infosys.com",
                PostalAddress = "tnl"


            });
        }
        [Test]
        [Description("to test add buyer")]
        public void AddBuyer()
        {
            _repo.BuyerRegister(new Buyer()
            {
                Id = 78,
                Createddatetime = System.DateTime.Now,
                Username = "susmitha",
                Password = "susmitha",
                Emailid = "sus@gmail.com",
                Mobileno = "8142070133"
            });
        }
        [Test]
        [Description("to check seller login")]
        public void TestSellerLogin()
        {
            var result = _repo.SellerLogin("seller", "seller");
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
