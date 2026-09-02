import Figure from "@/components/Figure";
import { FaqList } from "@/components/Seo";

/* Makine tipi sayfalarının bölüm listesi (yan gezinme bu sırayı kullanır) */
export const MACHINE_SECTIONS = [
  { id: "genel-bakis", label: "Genel bakış" },
  { id: "belirtiler", label: "Arıza belirtileri" },
  { id: "teshis", label: "Arıza tespiti" },
  { id: "sistemler", label: "Kontrol edilen sistemler" },
  { id: "surec", label: "Servis süreci" },
  { id: "karar", label: "Tamir mi değişim mi" },
  { id: "onleme", label: "Bakım önerileri" },
  { id: "maliyet", label: "Maliyet etkenleri" },
  { id: "servis-secimi", label: "Servis seçimi" },
  { id: "sss", label: "Sık sorulan sorular" },
];

export default function MachineArticle({ service: s, content: c }) {
  return (
    <>
      {c.intro.map((p, i) => (
        <p key={i} className="svc-p">
          {p}
        </p>
      ))}

      {c.shortAnswer && (
        <div className="callout callout--info">
          <span className="callout-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 16v-4.5M12 8.2h.01" />
            </svg>
          </span>
          <p>
            <strong>Kısa cevap. </strong>
            {c.shortAnswer.replace(/^Kısa cevap:\s*/, "")}
          </p>
        </div>
      )}

      {/* ---- Genel bakış ---- */}
      <section id="genel-bakis" className="svc-section">
        <h2 className="svc-h2">{s.name} nedir, neden uzman servis gerektirir?</h2>
        <p className="svc-p">{c.definition}</p>

        {s.image && (
          <Figure
            src={s.image.src}
            alt={s.image.alt}
            width={s.image.width}
            height={s.image.height}
            caption={s.image.caption}
            className="svc-figure"
          />
        )}

        {c.overviewSubs.map((x) => (
          <div key={x.h}>
            <h3 className="svc-h3">{x.h}</h3>
            <p className="svc-p">{x.p}</p>
          </div>
        ))}
      </section>

      {/* ---- Belirtiler ---- */}
      <section id="belirtiler" className="svc-section">
        <h2 className="svc-h2">{s.name} hangi durumlarda gerekir?</h2>
        <p className="svc-p">{c.symptomIntro}</p>

        <div className="symptom-grid">
          {c.symptoms.map((x) => (
            <div className="symptom" key={x}>
              <span className="symptom-mark" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3 1.8 20.5h20.4L12 3Z" />
                  <path d="M12 9.5v4.6M12 17.4h.01" />
                </svg>
              </span>
              {x}
            </div>
          ))}
        </div>

        {c.symptomTable.length > 0 && (
          <>
            <h3 className="svc-h3">Belirtiye göre ön değerlendirme</h3>
            <div className="svc-table-wrap">
              <table className="svc-table">
                <thead>
                  <tr>
                    <th>Belirti</th>
                    <th>Muhtemel kontrol alanı</th>
                    <th>Doğrulama yaklaşımı</th>
                  </tr>
                </thead>
                <tbody>
                  {c.symptomTable.map((r) => (
                    <tr key={r[0]}>
                      <td>
                        <strong>{r[0]}</strong>
                      </td>
                      <td>{r[1]}</td>
                      <td>{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>

      {/* ---- Teşhis ---- */}
      <section id="teshis" className="svc-section">
        <h2 className="svc-h2">Arıza tespiti nasıl yapılır?</h2>
        <p className="svc-p">{c.diagIntro}</p>

        <ol className="timeline">
          {c.diagnosis.map((x, i) => (
            <li key={x.h}>
              <span className="timeline-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h4>{x.h}</h4>
                <p>{x.p}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ---- Sistemler ---- */}
      <section id="sistemler" className="svc-section">
        <h2 className="svc-h2">Hangi parça ve sistemler kontrol edilir?</h2>
        <p className="svc-p">{c.systemsIntro}</p>

        <div className="sys-grid">
          {c.systems.map((r) => (
            <div className="sys-card" key={r[0]}>
              <strong>{r[0]}</strong>
              <span>{r[1]}</span>
            </div>
          ))}
        </div>

        {c.systemsNote && (
          <>
            <h3 className="svc-h3">{c.systemsNote.h}</h3>
            <p className="svc-p">{c.systemsNote.p}</p>
          </>
        )}
      </section>

      {/* ---- Süreç ---- */}
      <section id="surec" className="svc-section">
        <h2 className="svc-h2">Servis ve onarım süreci nasıl ilerler?</h2>
        <ol className="timeline">
          {c.process.map((x, i) => (
            <li key={x.h}>
              <span className="timeline-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h4>{x.h}</h4>
                <p>{x.p}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ---- Karar ---- */}
      <section id="karar" className="svc-section">
        <h2 className="svc-h2">Tamir, revizyon ve parça değişimi arasındaki fark</h2>
        <p className="svc-p">{c.decisionIntro}</p>

        <div className="svc-table-wrap">
          <table className="svc-table">
            <thead>
              <tr>
                <th>Seçenek</th>
                <th>Ne zaman uygun olabilir</th>
                <th>Karar kriteri</th>
              </tr>
            </thead>
            <tbody>
              {c.decisionRows.map((r) => (
                <tr key={r[0]}>
                  <td>
                    <strong>{r[0]}</strong>
                  </td>
                  <td>{r[1]}</td>
                  <td>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {c.oem && (
          <>
            <h3 className="svc-h3">{c.oem.h}</h3>
            <p className="svc-p">{c.oem.p}</p>
          </>
        )}
      </section>

      {/* ---- Bakım önerileri ---- */}
      <section id="onleme" className="svc-section">
        <h2 className="svc-h2">Arızayı azaltmak için bakım önerileri</h2>
        <p className="svc-p">{c.preventionIntro}</p>

        <ul className="checklist svc-ops">
          {c.prevention.map((x) => (
            <li key={x}>
              <span>{x}</span>
            </li>
          ))}
        </ul>

        {c.preventionNote && (
          <>
            <h3 className="svc-h3">{c.preventionNote.h}</h3>
            <p className="svc-p">{c.preventionNote.p}</p>
          </>
        )}
      </section>

      {/* ---- Maliyet ---- */}
      <section id="maliyet" className="svc-section">
        <h2 className="svc-h2">Servis maliyetini etkileyen faktörler</h2>
        <p className="svc-p">{c.costIntro}</p>

        <div className="cost-list">
          {c.costRows.map((r) => (
            <div className="cost-item" key={r[0]}>
              <strong>{r[0]}</strong>
              <span>{r[1]}</span>
            </div>
          ))}
        </div>

        {c.costNote && (
          <>
            <h3 className="svc-h3">{c.costNote.h}</h3>
            <p className="svc-p">{c.costNote.p}</p>
          </>
        )}
      </section>

      {/* ---- Servis seçimi ---- */}
      <section id="servis-secimi" className="svc-section">
        <h2 className="svc-h2">Servis seçerken nelere dikkat edilmeli?</h2>
        <p className="svc-p">{c.criteriaIntro}</p>

        <ul className="checklist svc-ops">
          {c.criteria.map((x) => (
            <li key={x}>
              <span>{x}</span>
            </li>
          ))}
        </ul>

        {c.criteriaNote && (
          <>
            <h3 className="svc-h3">{c.criteriaNote.h}</h3>
            <p className="svc-p">{c.criteriaNote.p}</p>
          </>
        )}
      </section>

      {/* ---- SSS ---- */}
      <section id="sss" className="svc-section">
        <h2 className="svc-h2">Sık sorulan sorular</h2>
        <FaqList items={c.faq} />
      </section>
    </>
  );
}
