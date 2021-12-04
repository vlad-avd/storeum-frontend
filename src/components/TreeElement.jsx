import React from 'react';
import {EllipsisOutlined, GoogleOutlined} from "@ant-design/icons";
import {Button} from "antd";

const TreeElement = ({title}) => {
    return (
        <div>
            {title}
            <Button
                block
                type="text"
                htmlType="submit"
                size={"small"}
                style={{height:"100%", textShadow: "none", marginLeft: 20, verticalAlign: "middle", border: "none", backgroundColor: "white", color: "black"}}
                icon={<EllipsisOutlined style={{verticalAlign: "middle"}} />}
            />
            {/*TODO*/}
            +
        </div>
    );
};

export default TreeElement;