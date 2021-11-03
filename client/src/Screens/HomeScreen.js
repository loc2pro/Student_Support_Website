import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";

export default function HomeScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(signin());
  }, [dispatch]);

  return (
    <>
      <div className="row">
        <div className="title">
          <a>Thông Tin Sinh Viên</a>
        </div>
      </div>
      <div className="row center">
        <div class="col-2">
          <div class="card">
            <div class="card-header">
              {userInfo && (
                <a href="thongtin.html">
                  <img class="medium" src={userInfo.user.image} alt="avatar" />
                </a>
              )}
            </div>
            <div class="card-body">
              {userInfo ? (
                <>
                  <div className="col-1">
                    <div className="mssv">
                      <h2>MSSV: {userInfo.user.mssv}</h2>
                    </div>
                    <div className="ten">
                      <h2>Họ tên: {userInfo.user.name}</h2>
                    </div>
                    <div className="gioitinh">
                      <h2>Email: {userInfo.user.email}</h2>
                    </div>
                  </div>
                  <div className="col-1">
                    <div class="lophoc">
                      <h2>Ngày Sinh: {userInfo.user.dateOfBirth}</h2>
                    </div>
                    <div className="khoahoc">
                      <h2>Khoa: {userInfo.sciences.tenkhoa}</h2>
                    </div>
                    <div className="nganh">
                      <h2>Ngành: {userInfo.marjor.tennganh}</h2>
                    </div>
                  </div>
                </>
              ) : (
                <h2>Bạn chưa Login !!!</h2>
              )}
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="lichhoc">
            <div class="container">
              <div class="box-df">
                <div class="portlet">
                  <div class="portlet-title">
                    <div class="caption">
                      <span class="caption-subject bold">
                        <a href="">Kết quả học tập</a>
                      </span>
                    </div>
                    <div class="actions">
                      <select
                        class="form-control"
                        id="cboIDDotThongKeKQHT"
                        name="cboIDDotThongKeKQHT"
                        placeholder="Chọn học kỳ"
                      >
                        <option value="">Chọn học kỳ</option>
                        <option value="41">HK2 (2021-2022)</option>
                        <option selected="selected" value="40">
                          HK1 (2021-2022)
                        </option>
                        <option value="39">HK3 (2020-2021)</option>
                        <option value="38">HK2 (2020-2021)</option>
                        <option value="37">HK1 (2020-2021)</option>
                        <option value="36">HK3 (2019-2020)</option>
                        <option value="35">HK2 (2019-2020)</option>
                        <option value="34">HK1 (2019-2020)</option>
                        <option value="18">HK3 (2018-2019)</option>
                        <option value="14">HK2 (2018-2019)</option>
                        <option value="13">HK1 (2018-2019)</option>
                      </select>
                    </div>
                  </div>
                  <div class="portlet-body">
                    <div id="box-dashboard-thongke-ketquahoctap-theodot"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2">
        <div className="lichhoc"></div>
      </div>

      <div className="featured">
        <div className="featured-item">
          <a href="/timetable" title="Lịch theo tuần">
            <div className="box-df">
              <div className="icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACWUlEQVRIiaXWS6hNYRgG4Geds3NPqHOOMKPcSso9nYwwITOFDPYhSScDZSAGDAyZmBhZGBgxEEUpJZESCrmLk5Brromjswz+f2fb1lr7XN7Junzv/t71/f+33+9PHMkU4CCmYG0RAbJquCapo/iSVW3P41VKcszHtDKRBizB26JgTWgiUsxBgk5ciT9sw83I/a/8JNWHRZH/PklNwvUYfoCurKqnEkVe4z4O4Cs+oAPt+I598QOSBp2a8OfIbcEX7MUYbMTzJDUtcSS7heGY1ZDkqrB07UXLwT979BTvsqrFDRVfQ1sFc7E0J8cOjC4TaUAXenPeb8adCn7jXg7h2gBEZFWXCkIP8LmCXziMlwNJXEOSNqW0I6mgDwsw0/+bPVRkGFUTGoYVeDqoTNXyeJLqwMOWqNo2GJF+op3Q99BaQhyP6UXBJNWapKXd2VovVIRuwR1u4obwJ6zHFPRgQ5M8pUKrcAibsBCTcLEuPgsvMFk/mqjMVLfgLo7H5048jkkznMOpKDR5KEJbBc+roRsf/fW31bgdP2bkUIReYTbOYgLGYkZd/Ha8jhfcpRTNmuERThCGGlbmcJqKUF7RemGpdsfnCzgj2NWv/iSvR1lFG4QNr2FEAa8X75oJlVXUhSe4LLj7Fuz3t5ptwryaiu1xsp7Mqvmu3yK0a95SvBEc4Ycwqruxpy4+D8txGs/ifV6b99YqGiZ/YBE6b0VBbBPNTRU/MaoFn7CrKX3w2Im+CtbgknDAOIpvBjCXCgZfbQ6tE/Z2dRIPkMtwDOPkHKmGgO/YnFWd/wNTFIxht3/xrgAAAABJRU5ErkJggg=="
                  alt=""
                />
              </div>
              Lịch theo tuần
            </div>
          </a>
        </div>

        <div className="featured-item">
          <a href="/ket-qua-hoc-tap.html" title="Kết quả học tập">
            <div className="box-df">
              <div className="icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAACdElEQVRIib3WSahOYRwG8N+RoUghs40hazJ0S6YbSuKKpCzIEYVYKDYWhlKElGsoC06mWFGmkmlPGUpZWAklESHcDMfifT+Oe+/3Odz7eep03nP+b+/z/p//8w6JY7mOIE/b/59keuIqJuMuGvPUuy4dYquNKxiDpRiCm1BPwgbsy1OnsAPjoWsdCW9ja5KZiDk4RPkMh2I5RpTpnGR2YSoOYzh25Kl1lMtwOm7ha+w/WzBDNbLd2IT5eepC63iZDM8JBuiGE7QdJMn0iu89kaypPbKyhF/wMbYfojue4CAak8wtfEgyT7AR8/LUxWqD/YlwBQZiEd5jN9biIuYLVh+KZUhwJ09dqjVgrRoejYRrcA0LcAP3YnwdcpzOUyeTTG/RiZBkVmExBuMVzuep5iLhDCyJg6/EzPjciPG97UxqJ7YnmQYF60c044NguAbsR3NF0mW4jiacxRQMKpBVw+b4jFKwfkQLtuSpxdgQv39KehxHsBpbsB4v/0AG8tTOmGlrtAhywrDWhM8xLgYmaVvbvvHfV7wpM5FqqEg6C6PxDNPQWOhzRij6S7ymuuX/hvCRYP9Z6I/7hT5NuIy5OB3f/4yidF8E47RGi2Cey+iNhYXYqiRra/1ahGV3mn6xPUCoYwXNGCsoNFKwfk109Dxs1/q1UJG0n2CanviMx4JEZQjbWL8M4Xnh/PouZH1PWCadjoqkE3BAmOU24S5SF1QIPwmL/wWe+nUc1Y3wm1A/6CVIW1fC/4Zihm9j+7XfM+zUWFfhvjhEuCE/EM7FPsLlSZlYkv2KJVnN2ITEsfyBsEt0jxP4JqzFSk0/okcnxFrw9AcL/rqKbZW/OQAAAABJRU5ErkJggg=="
                  alt=""
                />
              </div>
              Kết quả học tập
            </div>
          </a>
        </div>
        <div className="featured-item">
          <a href="/semester" title="Đăng ký học phần">
            <div className="box-df">
              <div className="icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAYAAADpnJ2CAAADU0lEQVRIia3WbYhWRRQH8N88rlEaBS4lViYWtZDmhzIq6AVJC0wUpFxCyiaK2gRfSkrcKMosrKygFzXIa4EUfjDNisoy2FqhsEhdIi1IV0uxIAV7Mavpw9yN62Ou+1QH7ofLnDn/OXP+538mWJY0aDdjKfqjLUVLG9lca8C3Fd+iwHN4DEtC4ftQuPH/BLwaX+FVbMRQ3IW5GIL1eDkUukNhwn8BvBxdeAffoAWTsKvisydFrRiOz7E2FLaFwthGAC9AJzpwAKPLLLcdLUiKtqdoIkZhN9aFwiehcGlvgOfgPXyKE8sMLyn/+2Qp2pKiK3ExAjaEQkcojOzxCZal4Wgrv12YgzcbADmqhcJVeKpMZgkWB8vSAQzEQ3igr0B9AawAz8aTSDVMxirciddwdqOgvQANDYWVmIe1mNCEd8uvBW/ha7wiU3/PvwRqxhOySOzC2BRt4nDSnC5ndwPGymx7ESc3ADQgFJ7HD3ILxRQNRXMo9OsBvAfbyxP1lxv8VJlE12MfFuH4XoCaQmEBfiqzmp2iQSlaXroswM5QuK+GGRiGD3GoEmcJTpJZOwO/YP4/gLWX++ahPUUDUvR0ndv7sirNruEM3CJr5SFHMnVRmfl8tONX3IppsjA8jIVoStEjdYe5NxQOyoS8PUXNoW5aPIj7cVDWyvqTNuFxzCr/F2NOin6uA2or/QZiYYrm/r1WAl6D23AdTsCjmIn9co1fqAM+Df2ws9qHoTCtBDpFLsncFO0vW2NFitbU8DHelqWIXKtZGITX5dm3RyZQj32HnRWgSaHQjeX4AINT1Jai/ZWYq0NhUw1f4HcMxsRK0B9xk9wuHViJHbi24jMuFLZhtTwthqWoNUV7K4cZX8b4E101RHnG7cUabC2vuJrNFFkYvsQbMqPXy4KxGyNTNDFF3RWgMaGwWdbl38rDTK0nTQuelRt/C+7ABofbKKzAcZiaoo3VxVAYLdfvQnwkP0O6etab6oJtxThcJDO0s9w0E5+VPptxft0+oTACz2CMPNIuS1HnEX7HeERdIVP/PPn6pstaW7Uz5TfOBPkpMj1F644W8Fhvmg6MwHicVQZcJdd8iCzyO+SMJ6fo3N7AOHaG9TZFvrZ9+EPW3LtT9FJfA/wFQAIJ7FVYOrIAAAAASUVORK5CYII="
                  alt=""
                />
              </div>
              Đăng ký học phần
            </div>
          </a>
        </div>
        <div className="featured-item">
          <a href="/cong-no-sinh-vien.html" title="Tra cứu công nợ">
            <div className="box-df">
              <div className="icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAYAAABoMT8aAAAB0UlEQVQ4jZ3VTYjNURgG8N9cN8Og8f0RkZ3FZKhBiYWFWbExZWJBYoWyk2ywoGRhIhbyUSMbZKOUxsaERAlLxCxkJcQdRt0xFu/5c437/WzOR+/7nHOe9znntLg8pgouYBq2VQrIV8vGMsysFlCOYAp2YgM6MQG3cB/9+FwanBuXfA4FnMHS1C9gEU7hE65UIniNvdiPVnThAV5iNSZiD3bgQxr/IXicVpyUdjGa5tsxtWSRS+lIrXiRadCNNZiDn2U0KYeF+IHeHA7jFT7WmQwj+ILTecwS4jSKY5ibx400aBR9hIgn0sTFJkjkUcRGDGAydoszwphQvSKyMt7DOvQIda+jI/WriltqpIfCB4dEWZ9jE2YLU9UkyHASS4T7nmAlnuItDtRDkOEZhjCIFWlHfeJurK+HAOahTdh2i7D1nUTaXQ/B6LjxMLbiPO6irRZBJexL7ZEcjuJgEyQD2JwT9/t4EwTTMZwTpcn7997Xg1U4m8NtofL7BpKH8A79mYhdwv9FbC8J/CrqnqEH38QT0MnfMhYxH1dxDd/xCGuxXLyNBdwUPmhPRP/5YBcWCFELmCHEGhGv8mL04leW0FLjZxoUH0tHpYBaP9MbNarzG3VVYP2cWKHIAAAAAElFTkSuQmCC"
                  alt=""
                />
              </div>
              Tra cứu công nợ
            </div>
          </a>
        </div>
        <div className="featured-item">
          <a href="/thanh-toan-truc-tuyen.html" title="Thanh toán trực tuyến">
            <div className="box-df">
              <div className="icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAABpUlEQVQ4jZ3UO2hUURAG4G/NgkoUxSD4AmG1E0vRxhQ+CzsRwTYRRG3sVLCw8YGdjWmMtYIKNhau4KOxsrKUYKUYNERJ1KAmsThzzHLZPat34DLnzsz57//fmXMarduL2/EQO/W3aczhBF7AxGhKNPEMW3AHn7GARsfmZViDw9gasec4hHYuagbIGM70YXMZl7AxgJ7gIJ7mrwkmsNjjybkBfMIOfEB727gDmZGgLr442LG5gR+xXlVhuBlvAmw4A60Of6UgbSj8JnzBd+zHBNpZ2uQ/SHsd/j2+RXwymA5kRivD3wiZndJmYz0ezHPnSB0eRqsq7XxB2hyud4lfxcUsbb4A0M+GWGp/yU7rP2N/21+yWxXf1UqM1uNlx/sMdtVhdB97MYIN0tmaqQPUCn9PGr5rhdqitOP4aWn4agO9wnLp7nmMC9JQ/jcQrMNdHJEmfKQO0B5MScM6K52pc3WA3mI0agZxDDd7Feeu/e6Sm5Ku31MB9qAHxnwn0EKB2e5CDn5loI84ixXBrFEp/Cq1f20lnq/ek5huYh8eSf+jjr3D0T+DjmL+E9i22QAAAABJRU5ErkJggg=="
                  alt=""
                />
              </div>
              Thanh toán trực tuyến
            </div>
          </a>
        </div>
        <div className="featured-item">
          <a href="/phieu-thu-tong-hop.html" title="Phiếu thu tổng hợp">
            <div className="box-df">
              <div className="icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAABaElEQVQ4jaXUv0ocURTH8c9mNxKFrZLGRDConQi+gEJiNg+QznqtjC8gWFiJtRjSaB5BSJsNJFY2KdOKCBsRQtgmoMF1N8XehetkrjtDfs059993zu/OnKnMHPTncIQFo9XBNVZxDKfNwUINXzCFD+jiQQ6gh9d4HsZfw7g13FALkPdYH1HNNrYwGUCf0MBn0dP7BWw9QRU/MY8LtGYPvYpBDwuAKpnxM3wPsKW8+0hpLMSnmAj5Cn6jVSsBaof4I2etWwa0hz+YjuZ6WMZMGVAHuznzO9gsc0cpPSb/48tqHRujNhWx9i7E/f8FtRWovIi1vkEPco/NVEXjIV6FeBNi0mYKdBLiYoAM2+NcwkUKNBvlPXebO7fBU6BfUZ5t1lylQGOZvBLlpazVo8P16HDd4J+UBHUz8y8iUCPKX/rX6m0M6mUWvxXIh7oZgi7xFo9CZYUu1+DtVbGGTi2U+xHNgoCszvDmL10iQd6WN1YNAAAAAElFTkSuQmCC"
                  alt=""
                />
              </div>
              Phiếu thu tổng hợp
            </div>
          </a>
        </div>
        <div className="featured-item">
          <a href="/lich-theo-tien-do.html" title="Lịch theo tiến độ">
            <div className="box-df">
              <div className="icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAABrklEQVRIic3Wv2sUQRjG8c/GVYPRlEYFUVTE0sLCwsoijYKViJ3b2Po/qJ2FtRZ3jWAKISBEsLC4Io2NgqCNjUiCP2KhSaPe3VjMLsixd7v3I8c9zbLPLO93Z9535p1EI0ATt+yuVkLmZooV3MA1bGEBX3ASH3Es90ZVwBE8TpoW0xx2GQn+4hXu4CHu4gG2+0bL6lGTpu9YncvfX+MnfqCLz7n/CTvDTGeA1iHRCH/wFKvYj4PYwBl8wHEcGhMWcBa3E42wjRS/xWXdDQXsQzsVZ3QFL0aKVD+Hl9AqctgeBTakOkgK4PwUgPMIc5WfTVhpiXca91DrZ5Jm36Eu7ofM+yrgAVzsMzaMOljsNcuCvsOpulHrVmmhqedwJormPNawVzwhBqpP0STi3r4esniGDgJ+wyPsqYJVqIvNXrMMuCm2pVqa+aIpm+ECLohLOk4OO3gTMr+qgOfwUiyacdTGMlpVwLc4YTK9cavXKAN28LVuxJkvmgI4qYvSIO34rwEfnQLwMJIUz/EkNzfyZ+2CGdAPCwUsiRfuVireuJ/l0M6wwBoK4p5eC5mr/wB2R2CZO4fmIgAAAABJRU5ErkJggg=="
                  alt=""
                />
              </div>
              Lịch theo tiến độ
            </div>
          </a>
        </div>
        <div className="featured-item">
          <a href="/ghi-chu-nhac-nho-sinh-vien.html" title="Ghi chú nhắc nhở">
            <div className="box-df">
              <div className="icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAYAAADpnJ2CAAABl0lEQVRIie3WP2sVQRSG8d9cNwn+6Qy2goU2io0YtLAXQWJhKbiFVinUTrCzUARt1DTCTuEHECttk3SCja1lUGwURBSTaMZid8MS7nXnRpNCfGFhZ8+885w9e2bYoEoydQ/nEdCa2vsXqXQ9Z5EiE/YQc3jWgXV1LUTTqXTpbwEv4Amubg6kkhDN4zL5wEM4YHj2CZM4ilPqMm4oRAnHEUJ0cnO8nYaPqfQ2qNJt3OpJbBW7mmuYfuIHpnrWeRBUKeEmno7IDr43scnfJLSO3SPiCbN41JZ0Ce96shu+Upk3L0SLMGjG+7cCG1PTWG+B47xdwF3cN7rEw7SMQYE1XMFMhukrbuCwuknOhegO9mZ4j2AlqNIXdXetGd001B9+T3PfzlvFBL5leAusFNiHs3iZkeUZLOCYunMnMJtKz/uMITqNpbZLcw/URTzGm2Ycc2BdtcC+DdvVHKL6EHg1hm+qCxxXr7fo29iHO6b/wH8HmP1j8wdKXeD7HQAuYxBU6TM+qU+R7dQMDhY4gfnmwXaVNuADLv4Co1ZbwkqTYWcAAAAASUVORK5CYII="
                  alt=""
                />
              </div>
              Nhắc nhở
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
