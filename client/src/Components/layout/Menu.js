import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <Row className="menuu">
      <Col>
        <Card style={{ width: "10rem" }} className="icon">
          <Link
            to="/timetable"
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            <Card.Img
              className="hinhanh"
              variant="top"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACWUlEQVRIiaXWS6hNYRgG4Geds3NPqHOOMKPcSso9nYwwITOFDPYhSScDZSAGDAyZmBhZGBgxEEUpJZESCrmLk5Brromjswz+f2fb1lr7XN7Junzv/t71/f+33+9PHMkU4CCmYG0RAbJquCapo/iSVW3P41VKcszHtDKRBizB26JgTWgiUsxBgk5ciT9sw83I/a/8JNWHRZH/PklNwvUYfoCurKqnEkVe4z4O4Cs+oAPt+I598QOSBp2a8OfIbcEX7MUYbMTzJDUtcSS7heGY1ZDkqrB07UXLwT979BTvsqrFDRVfQ1sFc7E0J8cOjC4TaUAXenPeb8adCn7jXg7h3gBEZFWXCkIP8LmCXziMlwNJXEOSNqW0I6mgDwsw0/+bPVRkGFUTGoYVeDqoTNXyeJLqwMOWqNo2GJF+op3Q99BaQhyP6UXBJNWapKXd2VovVIRuwR1u4obwJ6zHFPRgQ5M8pUKrcAibsBCTcLEuPgsvMFk/mqjMVLfgLo7H5048jkkznMOpKDR5KEJbBc+roRsf/fW31bgdP2bkUIReYTbOYgLGYkZd/Ha8jhfcpRTNmuERThCGGlbmcJqKUF7RemGpdsfnCzgj2NWv/iSvR1lFG4QNr2FEAa8X75oJlVXUhSe4LLj7Fuz3t5ptwryaiu1xsp7Mqvmu3yK0a95SvBEc4Ycwqruxpy4+D8txGs/ifV6b99YqGiZ/YBE6b0VBbBPNTRU/MaoFn7CrKX3w2Im+CtbgknDAOIpvBjCXCgZfbQ6tE/Z2dRIPkMtwDOPkHKmGgO/YnFWd/wNTFIxht3/xrgAAAABJRU5ErkJggg=="
              style={{ width: "50px", marginTop: "10px" }}
              height="50"
            />
            <Card.Body>
              <Card.Text>Lịch Theo Tuần </Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "10rem" }} className="icon">
          <Link
            to="learnresult"
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            <Card.Img
              className="hinhanh"
              variant="top"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAYAAADpnJ2CAAABl0lEQVRIie3WP2sVQRSG8d9cNwn+6Qy2goU2io0YtLAXQWJhKbiFVinUTrCzUARt1DTCTuEHECttk3SCja1lUGwURBSTaMZid8MS7nXnRpNCfGFhZ8+885w9e2bYoEoydQ/nEdCa2vsXqXQ9Z5EiE/YQc3jWgXV1LUTTqXTpbwEv4Amubg6kkhDN4zL5wEM4YHj2CZM4ilPqMm4oRAnHEUJ0cnO8nYaPqfQ2qNJt3OpJbBW7mmuYfuIHpnrWeRBUKeEmno7IDr43scnfJLSO3SPiCbN41JZ0Ce96shu+Upk3L0SLMGjG+7cCG1PTWG+B47xdwF3cN7rEw7SMQYE1XMFMhukrbuCwuknOhegO9mZ4j2AlqNIXdXetGd001B9+T3PfzlvFBL5leAusFNiHs3iZkeUZLOCYunMnMJtKz/uMITqNpbZLcw/URTzGm2Ycc2BdtcC+DdvVHKL6EHg1hm+qCxxXr7fo29iHO6b/wH8HmP1j8wdKXeD7HQAuYxBU6TM+qU+R7dQMDhY4gfnmwXaVNuADLv4Co1ZbwkqTYWcAAAAASUVORK5CYII="
              style={{ width: "50px", marginTop: "10px" }}
              height="50"
            />
            <Card.Body>
              <Card.Text>Kết Quả Học Tập </Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "10rem" }} className="icon">
          <Link
            to="/semester"
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            <Card.Img
              className="hinhanh"
              variant="top"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACWUlEQVRIiaXWS6hNYRgG4Geds3NPqHOOMKPcSso9nYwwITOFDPYhSScDZSAGDAyZmBhZGBgxEEUpJZESCrmLk5Brromjswz+f2fb1lr7XN7Junzv/t71/f+33+9PHMkU4CCmYG0RAbJquCapo/iSVW3P41VKcszHtDKRBizB26JgTWgiUsxBgk5ciT9sw83I/a/8JNWHRZH/PklNwvUYfoCurKqnEkVe4z4O4Cs+oAPt+I598QOSBp2a8OfIbcEX7MUYbMTzJDUtcSS7heGY1ZDkqrB07UXLwT979BTvsqrFDRVfQ1sFc7E0J8cOjC4TaUAXenPeb8adCn7jXg7h3gBEZFWXCkIP8LmCXziMlwNJXEOSNqW0I6mgDwsw0/+bPVRkGFUTGoYVeDqoTNXyeJLqwMOWqNo2GJF+op3Q99BaQhyP6UXBJNWapKXd2VovVIRuwR1u4obwJ6zHFPRgQ5M8pUKrcAibsBCTcLEuPgsvMFk/mqjMVLfgLo7H5048jkkznMOpKDR5KEJbBc+roRsf/fW31bgdP2bkUIReYTbOYgLGYkZd/Ha8jhfcpRTNmuERThCGGlbmcJqKUF7RemGpdsfnCzgj2NWv/iSvR1lFG4QNr2FEAa8X75oJlVXUhSe4LLj7Fuz3t5ptwryaiu1xsp7Mqvmu3yK0a95SvBEc4Ycwqruxpy4+D8txGs/ifV6b99YqGiZ/YBE6b0VBbBPNTRU/MaoFn7CrKX3w2Im+CtbgknDAOIpvBjCXCgZfbQ6tE/Z2dRIPkMtwDOPkHKmGgO/YnFWd/wNTFIxht3/xrgAAAABJRU5ErkJggg=="
              style={{ width: "50px", marginTop: "10px" }}
              height="50"
            />
            <Card.Body>
              <Card.Text>Đăng Ký Học Phần </Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "10rem" }} className="icon">
          <Link
            to="/detb"
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            <Card.Img
              className="hinhanh"
              variant="top"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAYAAABoMT8aAAAB0UlEQVQ4jZ3VTYjNURgG8N9cN8Og8f0RkZ3FZKhBiYWFWbExZWJBYoWyk2ywoGRhIhbyUSMbZKOUxsaERAlLxCxkJcQdRt0xFu/5c437/WzOR+/7nHOe9znntLg8pgouYBq2VQrIV8vGMsysFlCOYAp2YgM6MQG3cB/9+FwanBuXfA4FnMHS1C9gEU7hE65UIniNvdiPVnThAV5iNSZiD3bgQxr/IXicVpyUdjGa5tsxtWSRS+lIrXiRadCNNZiDn2U0KYeF+IHeHA7jFT7WmQwj+ILTecwS4jSKY5ibx400aBR9hIgn0sTFJkjkUcRGDGAydoszwphQvSKyMt7DOvQIda+jI/WriltqpIfCB4dEWZ9jE2YLU9UkyHASS4T7nmAlnuItDtRDkOEZhjCIFWlHfeJurK+HAOahTdh3i7D1nUTaXQ/B6LjxMLbiPO6irRZBJexL7ZEcjuJgEyQD2JwT9/t4EwTTMZwTpcn7997Xg1U4m8NtofL7BpKH8A79mYhdwv9FbC8J/CrqnqEH38QT0MnfMhYxH1dxDd/xCGuxXLyNBdwUPmhPRP/5YBcWCFELmCHEGhGv8mL04leW0FLjZxoUH0tHpYBaP9MbNarzG3VVYP2cWKHIAAAAAElFTkSuQmCC"
              style={{ width: "50px", marginTop: "10px" }}
              height="50"
            />
            <Card.Body>
              <Card.Text>Tra Cứu Công Nợ </Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "10rem" }} className="icon">
          <Link
            to="/pay"
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            <Card.Img
              className="hinhanh"
              variant="top"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAABpUlEQVQ4jZ3UO2hUURAG4G/NgkoUxSD4AmG1E0vRxhQ+CzsRwTYRRG3sVLCw8YGdjWmMtYIKNhau4KOxsrKUYKUYNERJ1KAmsThzzHLZPat34DLnzsz57//fmXMarduL2/EQO/W3aczhBF7AxGhKNPEMW3AHn7GARsfmZViDw9gasec4hHYuagbIGM70YXMZl7AxgJ7gIJ7mrwkmsNjjybkBfMIOfEB727gDmZGgLr442LG5gR+xXlVhuBlvAmw4A60Of6UgbSj8JnzBd+zHBNpZ2uQ/SHsd/j2+RXwymA5kRivD3wiZndJmYz0ezHPnSB0eRqsq7XxB2hyud4lfxcUsbb4A0M+GWGp/yU7rP2N/21+yWxXf1UqM1uNlx/sMdtVhdB97MYIN0tmaqQPUCn9PGr5rhdqitOP4aWn4agO9wnLp7nmMC9JQ/jcQrMNdHJEmfKQO0B5MScM6K52pc3WA3mI0agZxDDd7Feeu/e6Sm5Ku31MB9qAHxnwn0EKB2e5CDn5loI84ixXBrFEp/Cq1f20lnq/ek5huYh8eSf+jjr3D0T+DjmL+E9i22QAAAABJRU5ErkJggg=="
              style={{ width: "50px", marginTop: "10px" }}
              height="50"
            />
            <Card.Body style={{ height: "60px" }}>
              <Card.Text>Thanh Toán Trực Tuyến </Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "10rem" }} className="icon">
          <Link
            to="/progresslearn"
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            <Card.Img
              className="hinhanh"
              variant="top"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAABrklEQVRIic3Wv2sUQRjG8c/GVYPRlEYFUVTE0sLCwsoijYKViJ3b2Po/qJ2FtRZ3jWAKISBEsLC4Io2NgqCNjUiCP2KhSaPe3VjMLsixd7v3I8c9zbLPLO93Z9535p1EI0ATt+yuVkLmZooV3MA1bGEBX3ASH3Es90ZVwBE8TpoW0xx2GQn+4hXu4CHu4gG2+0bL6lGTpu9YncvfX+MnfqCLz7n/CTvDTGeA1iHRCH/wFKvYj4PYwBl8wHEcGhMWcBa3E42wjRS/xWXdDQXsQzsVZ3QFL0aKVD+Hl9AqctgeBTakOkgK4PwUgPMIc5WfTVhpiXca91DrZ5Jm36Eu7ofM+yrgAVzsMzaMOljsNcuCvsOpulHrVmmhqedwJormPNawVzwhBqpP0STi3r4esniGDgJ+wyPsqYJVqIvNXrMMuCm2pVqa+aIpm+ECLohLOk4OO3gTMr+qgOfwUiyacdTGMlpVwLc4YTK9cavXKAN28LVuxJkvmgI4qYvSIO34rwEfnQLwMJIUz/EkNzfyZ+2CGdAPCwUsiRfuVireuJ/l0M6wwBoK4p5eC5mr/wB2R2CZO4fmIgAAAABJRU5ErkJggg=="
              style={{ width: "50px", marginTop: "10px" }}
              height="50"
            />
            <Card.Body>
              <Card.Text>Tiến Độ Học Tập </Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </Col>
    </Row>
  );
}
