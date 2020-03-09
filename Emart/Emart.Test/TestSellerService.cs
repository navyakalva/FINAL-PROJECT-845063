using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
namespace Emart.Test
{
    [TestFixture]
    class TestSellerService
    {
        SellerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new SellerRepository(new EmartDBContext());
        }
        [Test]
        public void TestGetProfile()
        {
            var result = _repo.GetSellerProfile(1);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestEditProfile()
        {
            Seller seller = _repo.GetSellerProfile(1);
            seller.Companyname = "Amazon";
            seller.Contactno = "9581719882";
            _repo.EditProfile(seller);
            Seller seller1 = _repo.GetSellerProfile(1);
            Assert.AreSame(seller, seller1);

        }
    }
}
