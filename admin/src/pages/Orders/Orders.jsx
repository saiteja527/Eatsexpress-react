import React, { useState, useEffect } from 'react';
import './Orders.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("An error occurred while fetching orders");
      console.error(error);
    }
  };

  const statusHandler = async (e,orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: e.target.value,
    })
    if (response.data.success) { 
      toast.success("Status updated successfully");
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, index) => (
                  <span key={index}>
                    {item.name} x{item.quantity}
                    {index !== order.items.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
              <p className="order-item-name">
                {order.address.firstName} {order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>
                  {order.address.street},{order.address.city},{" "}
                  {order.address.state}, {order.address.country},{" "}
                  {order.address.zipcode}
                </p>
              </div>
              <p className="order-item-phone">Phone: {order.address.phone}</p>
            </div>
            <p>Items:{order.items.length}</p>
            <p>Price: ₹{order.amount}</p>
            <select
              onChange={(e) => statusHandler(e, order._id)}
              value={order.status}
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out Of Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
      {!orders.length > 0 && <h2>Orders Are Not Yet Added</h2>}
    </div>
  );
};

export default Orders;
