import { List, Skeleton } from "antd";
import { Badge } from "lucide-react";
import React from "react";

const DashListSkeleton = () => {
  return (
    <List.Item.Meta
      avatar={<Badge color="transparent" />}
      title={
        <Skeleton.Button active style={{ height: "14px", width: "200px" }} />
      }
      description={
        <Skeleton.Button
          active
          style={{ height: "16px", width: "300px ", marginTop: "8px" }}
        />
      }
    >
      DashListSkeleton
    </List.Item.Meta>
  );
};

export default DashListSkeleton;
