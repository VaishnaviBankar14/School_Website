import { useState } from "react";

import NoticeCard from "./NoticeCard";
import EmptyNotice from "./EmptyNotice";
import NoticeModal from "./NoticeModal";

const NoticeList = ({ notices }) => {
  const [selectedNotice, setSelectedNotice] =
    useState(null);

  if (!notices || notices.length === 0) {
    return <EmptyNotice />;
  }

  return (
    <>
      <div className="row g-4">

        {notices.map((notice) => (
          <div
            className="col-lg-4 col-md-6"
            key={notice.id}
          >
            <NoticeCard
              notice={notice}
              onReadMore={() =>
                setSelectedNotice(notice)
              }
            />
          </div>
        ))}

      </div>

      <NoticeModal
        notice={selectedNotice}
        onClose={() =>
          setSelectedNotice(null)
        }
      />
    </>
  );
};

export default NoticeList;