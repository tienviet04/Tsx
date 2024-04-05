const List = () => {
  return (
    <div className=" w-[211px] h-[215px] max-w-48 bg-white rounded-lg border border-gray-300 mr-3">
      <div className="ml-4 py-2 ">
        <div className="font-medium text-lg">
          <p>Sắp xếp</p>
        </div>

        <div>
          <input
            type="radio"
            name="DeliveryOption"
            value="DeliveryPriority"
            id="DeliveryPriority"
            className="size-3 border-gray-300 text-blue-500"
          />
          <label htmlFor=""> Mặc định </label>
        </div>

        <div>
          <input
            type="radio"
            name="DeliveryOption"
            value="DeliveryPriority"
            id="DeliveryPriority"
            className="size-3 border-gray-300 text-blue-500"
          />
          <label htmlFor=""> Giờ đi sớm nhất </label>
        </div>

        <div>
          <input
            type="radio"
            name="DeliveryOption"
            value="DeliveryPriority"
            id="DeliveryPriority"
            className="size-3 border-gray-300 text-blue-500"
          />
          <label htmlFor=""> Giờ đi muộn nhất </label>
        </div>

        <div>
          <input
            type="radio"
            name="DeliveryOption"
            value="DeliveryPriority"
            id="DeliveryPriority"
            className="size-3 border-gray-300 text-blue-500"
          />
          <label htmlFor=""> Đánh giá cao nhất </label>
        </div>
        <div>
          <input
            type="radio"
            name="DeliveryOption"
            value="DeliveryPriority"
            id="DeliveryPriority"
            className="size-3 border-gray-300 text-blue-500"
          />
          <label htmlFor=""> Giá tăng dần </label>
        </div>

        <div>
          <input
            type="radio"
            name="DeliveryOption"
            value="DeliveryPriority"
            id="DeliveryPriority"
            className="size-3 border-gray-300 text-blue-500"
          />
          <label htmlFor=""> Giá giảm dần </label>
        </div>
      </div>
    </div>
  );
};
export default List;
