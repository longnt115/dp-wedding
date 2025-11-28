import "@/styles/components/Footer.scss";

export const Footer = () => {
  return (
    <footer id="fh5co-footer" role="contentinfo" className="py-12 bg-[#a10129]">
      <div className="container">
        <div className="row copyright">
          <div className="col-md-12 text-center">
            <div className="mb-0 text-white wd-footer-content relative w-fit mx-auto px-15">
              <small className="block text-2xl leading-[0.4] nunito-semibold">
                Hải Đăng{" "}
              </small>
              <span className="nunito-regular text-[0.85rem]">&</span>
              <small className="block text-2xl leading-[0.5] nunito-semibold">
                Bích Phượng
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
