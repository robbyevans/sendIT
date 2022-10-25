import { useNavigate } from "react-router-dom";
import { setOrderList } from "../../features/orderList";
import { useDispatch, useSelector } from "react-redux";

const Location = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    navigate("/payment");
  };

  const option = useSelector((state) => state.orderList.value);

  const handleInput = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    dispatch(setOrderList({...option, [name]:value}));
    // setOption({ ...option, [name]:value});
    console.log(option);
  }

  return (
    <div className="bg-gray-100 w-[100%] text-slate-900">
      <h2 className="font-open text-lg font-bold mx-5 my-2">
        Delivery Location
      </h2>
      <hr className="mx-5 my-2 border" />
      <div className="flex justify-around">
        <div className="bg-white mx-5 w-[100%] shadow-lg p-5 rounded-md">
          <div className="flex flex-col md:flex-row justify-around mt-[10px]">
            <div className="flex items-end font-open my-3">
              <label htmlFor="pickup_location">Pickup Location</label>
              <input
                type="text"
                name="pickup_location"
                onChange={handleInput}
                className="border-b-2 outline-none mx-3 border-slate-700"
              />
            </div>
            <div className="flex items-end font-open my-3">
              <label htmlFor="delivery_location">Delivery Location</label>
              <input
                type="text"
                name="delivery_location"
                onChange={handleInput}
                className="border-b-2 outline-none mx-3 border-slate-700"
              />
            </div>
          </div>
          <div className="p-[20px] flex justify-end font-work mt-16">
            <button className="border-2 px-4 py-2 mx-2 rounded-full">
              Cancel
            </button>
            <button
              onClick={handleNavigate}
              className="border px-4 py-2 mx-2 rounded-full bg-blue-800 text-white"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
