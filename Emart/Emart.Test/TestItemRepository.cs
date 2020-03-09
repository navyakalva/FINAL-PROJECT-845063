using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.SellerService.Repositories;
using Emart.SellerService.Models;
namespace Emart.Test
{
    [TestFixture]
    class TestItemRepository
    {
        ItemRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new ItemRepository(new EmartDBContext());
        }
        [Test]
        [Description("to test Get All Items")]
        public void TestGetAllItem()
        {
            var result = _repo.GetAllItems();
            Assert.NotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        [Description("to test Get Item")]
        public void TestGetItem()
        {
            var result = _repo.GetItems(40);
            Assert.IsNotNull(result);

        }
        [Test]
        [Description("to test View  Item")]
        public void TestViewItems()
        {
            var result = _repo.ViewItems(1);
            Assert.IsNotNull(result);

        }
        [Test]
        [Description("to test Delete Item")]
        public void TestDeleteItems()
        {
            _repo.DeleteItems(12);
            var x = _repo.GetItems(12);
            Assert.Null(x);
        }
        [Test]
        [Description("to Add item")]
        public void TestAddItem()
        {
            _repo.AddItems(new Items()
            {
                Id = 13,
                ItemName = "books",
                CategoryId = 1,
                SubcategoryId = 1,
                Description = "read",
                Imagepath = "book.jpg",
                StockNumber = 8,
                Price = 450,
                SellerId = 1,
                Remarks = "good"
            });
            var result = _repo.GetItems(12);
            Assert.NotNull(result);

        }



        [Test]
        [Description("to test update item")]
        public void TestUpdate()
        {
            Items i = _repo.GetItems(12);
            i.ItemName = "pencils";
            _repo.UpdateItems(i);
            Items i1 = _repo.GetItems(12);
            Assert.AreSame(i, i1);

        }
        [Test]
        public void TestGetCategory()
        {
            var result = _repo.GetAllCategories();
            Assert.NotNull(result);
            Assert.AreEqual(result.Count, 2);
        }
        [Test]
        public void TestGetSubCategory()
        {
            var result = _repo.GetSubCategories(1);
            Assert.NotNull(result);
            Assert.AreEqual(result.Count, 3);
        }
    }

}

