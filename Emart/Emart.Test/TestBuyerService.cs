using System;
using System.Collections.Generic;
using System.Text;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
using NUnit.Framework;
namespace Emart.Test
{
    [TestFixture]
    class TestBuyerService
    {
        BuyerRepository _repo;

        [SetUp]
        public void Setup()
        {
            _repo = new BuyerRepository(new EmartDBContext());

        }
        [Test]
        [Description("testing GetBuyerProfile()")]
        public void TestGetBuyerProfile()
        {
            var result = _repo.Getprofile(4);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestEditBuyerProfile()
        {
            Buyer buyer = _repo.Getprofile(123);
            buyer.Username = "navya";
            buyer.Password = "password";
            buyer.Mobileno = "123344444";
            buyer.Emailid = "navi@gmail.com";
            _repo.Editbuyerprofile(buyer);
        }
        [Test]
        public void TestSearch()
        {
            var result = _repo.Searchitems("teddy");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestGetCategory()
        {
            var result = _repo.GetCategory();
            Assert.NotNull(result);
            Assert.AreEqual(result.Count, 3);
        }
        [Test]
        public void TestGetSubCategory()
        {
            var result = _repo.GetSubCategory(1);
            Assert.NotNull(result);
            Assert.AreEqual(result.Count, 3);
        }
        [Test]
        public void TestTransactionHistory()
        {
            var result = _repo.Transactionshistory(1);
            Assert.NotNull(result);
        }
        [Test]
        public void TestBuyItem()
        {
            _repo.Buyitem(new PurchaseHistory()
            {

                Transactionid = 8,
                TransactionType = "debit",
                DateTime=System.DateTime.Now,
                SellerId=1,
                BuyerId=2,
                ItemId=11,
                NoOfItems=21,
                Remarks="good"


            });
            var result = _repo.Transactionshistory(3);
            Assert.NotNull(result);


        }
        [Test]
        [Description("to test add to cart")]
        public void Addtocart()
        {
            _repo.AddToCart(new Cart()
            {
                Id = 22,
                Itemid = 11,
                Categoryid = 87,
                Subcategoryid = 75,
                Itemname = "doll",
                Price = 20,
                Description = "games",
                Stocknumber = 30,
                Remarks = "super",
                Sellerid = 1,
                Buyerid = 4,
                Imagepath = "games.jpg"
            });

        }
        [Test]
        [Description("to test GetAllItems in Cart")]

        public void TestGetCartItems()
        {
            var result = _repo.GetCart();
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("to test delete cart items")]
        public void TestDeleteCartItems()
        {
            _repo.DeleteFromCart(22);
          //  var result = _repo.GetCart();
           // Assert.Null(result);
        }
    }
}
