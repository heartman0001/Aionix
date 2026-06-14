import { useState } from 'react';
import partner_img from '../img/mainpage/next_co.png';
import partner_img2 from '../img/mainpage/inet_co.png';

const PARTNER_IMAGES = [
  partner_img,
  partner_img2,
  partner_img2,
  partner_img2,
  partner_img2,
  partner_img2,
];

export function PartnerSection() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 5;
  const pageCount = Math.ceil(PARTNER_IMAGES.length / itemsPerPage);
  const visiblePartners = PARTNER_IMAGES.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <section className="partner-section">
      <div className="partner-container">
        <h2>Partners</h2>
      </div>
      <div className="partner-logos">
        {visiblePartners.map((logo, index) => (
          <div className="partner-logo" key={`${logo}-${index}`}>
            <img src={logo} alt={`Partner logo ${index + 1}`} />
          </div>
        ))}
      </div>
      {pageCount > 1 && (
        <div className="partner-pagination">
          <button
            className="pagination-arrow pagination-arrow--prev"
            type="button"
            onClick={() => setPage((current) => Math.max(0, current - 1))}
            disabled={page === 0}
            aria-label="Previous page"
          >
            {'<'}
          </button>
          <div className="pagination-dots">
            {Array.from({ length: pageCount }).map((_, pageIndex) => (
              <button
                key={pageIndex}
                className={`pagination-dot ${page === pageIndex ? 'pagination-dot--active' : ''}`}
                type="button"
                onClick={() => setPage(pageIndex)}
                aria-label={`Go to page ${pageIndex + 1}`}
              />
            ))}
          </div>
          <button
            className="pagination-arrow pagination-arrow--next"
            type="button"
            onClick={() => setPage((current) => Math.min(pageCount - 1, current + 1))}
            disabled={page === pageCount - 1}
            aria-label="Next page"
          >
            {'>'}
          </button>
        </div>
      )}
    </section>
  );
}
