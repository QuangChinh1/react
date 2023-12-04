import { Button, InputNumber } from "antd";
import "./ProductItem1.css";
import { useEffect } from "react";

function ProductItem1({ data }) {
    useEffect(() => {
        console.log(data);
    }, []);
    const onChange = (value) => {
        console.log("changed", value);
    };
    return (
        <div className="ProductItem1-1">
            <img className="ProductItem1-ProductImg" src={data.image} />
            <div>{data.productName} </div>
            <div>
                <div>Giá : {data.price}</div>
                <div>Tình trạng :{data.productStatus}</div>
                <div>Đon vị vận chuyển :</div>
                <div>Danh mục :</div>
                <div>
                    <InputNumber min={1} max={999999} onChange={onChange} />
                    <Button type="primary">Áp dụng </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem1;
