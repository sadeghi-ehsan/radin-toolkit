import { Collapse as SBTCollapse } from "../../src";

const Collapse = () => {
  return (
    <div className="container">
      <SBTCollapse title="اطلاعات فعالیت بازارگردان">
        <div className="grid grid-cols-2">
          <div>
            <h1>اطلاعات مجوز</h1>
            <div className="grid grid-cols-2">
              <div>حداقل حجم تعهد</div>
              <div>3,750</div>
              <div>حجم انباشته</div>
              <div>1,600</div>
            </div>
          </div>
          <div>
            <h1>وضعیت دارایی</h1>
            <div className="grid grid-cols-2">
              <div>نقد</div>
              <div>M 5,000,000 ریال</div>
              <div>دارایی سهام</div>
              <div>100,000</div>
            </div>
          </div>
        </div>
      </SBTCollapse>
      <div className="pt-2">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
        هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
        متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی
      </div>
    </div>
  );
};

export default Collapse;
