import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import { Empty, Table } from "antd";
import { color } from "../../styles/theme";
import WhiteBoxLayout from "../layouts/WhiteBoxLayout";
import TextAtom from "../atom/TextAtom";
import BasicButton from "../atom/BasicButton";
import useGetLockerList from "../../hooks/useGetLockerList";
import remainTableColumn from "../column/RemainTableColumn";
import { lockerListResultFormat, numberToLocaleString } from "../../utils/utils";

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)};
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const MonthlySection = ({ setCreateLockerUserModal }) => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [displayMonthly, setDisplayMonthly] = useState("remain");
  const [expiredData, setExpiredData] = useState({
    data: [],
    total: 0,
    page: 1,
  });
  const [remainData, setRemainData] = useState({
    data: [],
    total: 0,
    page: 1,
  });
  const [selectedLockerIdx, setSelectedLockerIdx] = useState("");
  const [selectedLockerIdxUser, setSelectedLockerIdxUser] = useState("");
  const { isLoading: remainDataLoading, refetch: remainDataRefetch } = useGetLockerList({
    dataKey: "lockerRemainData",
    type: "remain",
    formData: { page: expiredData.page, amount: 5 },
    onSuccess: (data) => {
      const result = lockerListResultFormat(data.list);
      setRemainData((prev) => ({
        ...prev,
        data: result,
        total: data.total,
      }));
    },
    onError: (error) => {
      console.log(error);
    },
  });
  useEffect(() => {
    const debounce = setTimeout(() => {
      return remainDataRefetch();
    }, 300);
    return () => clearTimeout(debounce);
  }, [remainData.page]);

  const onPaidChange = (idx, paid) => {
    // 락카 납부 변경
    // changeMutation.mutate({ locker_idx: idx, paid });
  };
  const getSelectLockerInfo = (idx) => {
    setSelectedLockerIdx(idx);
  };
  const getSelectUserInfo = (idx) => {
    setSelectedLockerIdxUser(idx);
  };
  const onChangeRemainData = useCallback((pagination, filters, extra) => {
    setRemainData((prev) => ({
      ...prev,
      page: pagination.current,
    }));
  }, []);
  console.log(remainData);
  return (
    <WhiteBoxLayout marginBottom={"2.4rem"}>
      <Row marginBottom={isDisplay ? "3rem" : 0}>
        <Wrapper>
          <TextAtom fontSize={"2.2rem"} fontWeight="bold" marginRight={"2.4rem"}>
            {`${displayMonthly === "remain" ? "남은 기간" : "만료된 지"} 30일 이내`}
          </TextAtom>

          <BasicButton focused={displayMonthly === "remain"} onClick={() => setDisplayMonthly("remain")} marginright="0.6rem">
            Soon
          </BasicButton>
          <BasicButton focused={displayMonthly === "expired"} onClick={() => setDisplayMonthly("expired")} marginright="1.2rem">
            Already
          </BasicButton>
          <TextAtom fontSize={"1.8rem"} fontWeight="nomal" marginRight={"2.4rem"}>
            ( <span style={{ color: color.gold }}>{`${displayMonthly === "remain" ? remainData.total : expiredData.total}`}</span>명 )
          </TextAtom>
        </Wrapper>
        <BasicButton focused={false} onClick={() => setIsDisplay((prev) => !prev)}>
          {isDisplay ? "접기" : "펼치기"}
        </BasicButton>
      </Row>
      {isDisplay && (
        <>
          <div> {remainData.data}</div>
          {displayMonthly === "remain" && (
            <Table
              dataSource={remainData.data}
              columns={remainTableColumn({
                onPaidChange,
                getSelectLockerInfo,
                getSelectUserInfo,
              })}
              style={{ borderTop: `2px solid ${color.mainBlue}` }}
              scroll={{ x: 1700 }}
              onChange={onChangeRemainData}
              pagination={{
                total: remainData.total,
                pageSize: 5,
                showSizeChanger: false,
                current: remainData.page,
              }}
              loading={remainDataLoading}
              locale={{
                emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={"No Data"} />,
              }}
            />
          )}
        </>
      )}
    </WhiteBoxLayout>
  );
};

export default MonthlySection;
