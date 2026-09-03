import Link from "next/link";
import { services, serviceHref } from "@/lib/services";

import { site } from "@/lib/site";
import {
  getContent,
  getMachineContent,
  shared,
  decisionRows,
} from "@/lib/serviceContent";
import { CtaBand } from "@/components/CtaBand";
import {
  JsonLd,
  FaqList,
  articleJsonLd,
  serviceJsonLd,
} from "@/components/Seo";
import Icon from "@/components/Icons";
import PageHeader from "@/components/PageHeader";
import Figure from "@/components/Figure";
import ArticleNav from "@/components/ArticleNav";
import ServiceAreas from "@/components/ServiceAreas";
import RelatedServices from "@/components/RelatedServices";
import MachineArticle, { MACHINE_SECTIONS } from "@/components/MachineArticle";

/* Ortak metinlerdeki yer tutucuları doldurur */
function fill(text, focus) {
  const title = focus
    .split(" ")
    .map((w) => w.charAt(0).toLocaleUpperCase("tr-TR") + w.slice(1))
    .join(" ");
  return text.replace(/\{focus\}/g, focus).replace(/\{FOCUS_TITLE\}/g, title);
}

const SECTIONS = [
  { id: "genel-bakis", label: "Genel bakış" },
  { id: "belirtiler", label: "Arıza belirtileri" },
  { id: "teshis", label: "Teşhis süreci" },
  { id: "onarim", label: "Onarım ve revizyon" },
  { id: "karar", label: "Değişim mi revizyon mu" },
  { id: "ihmal", label: "Bakım ihmalinin sonucu" },
  { id: "servis-secimi", label: "Doğru servis seçimi" },
  { id: "onleme", label: "Arıza önleme" },
  { id: "marka-model", label: "Marka ve model" },
  { id: "sss", label: "Sık sorulan sorular" },
];

export default function ServiceView({ service: s }) {
  const c = getContent(s.slug);
  const m = getMachineContent(s.slug);
  const sections = m ? MACHINE_SECTIONS : SECTIONS;
  const focus = c?.focus || m?.focus || s.name.toLocaleLowerCase("tr-TR");
  const F = (t) => fill(t, focus);

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 6);

  return (
    <>
      <PageHeader
        trail={[
          { href: "/", label: "Anasayfa" },
          { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
          { href: serviceHref(s.slug), label: s.name },
        ]}
        title={s.title}
      />

      {/* ---------- Özet şerit ---------- */}
      <section className="svc-lead">
        <div className="shell svc-lead-grid">
          <div>
            <p className="svc-lede">{(c || m)?.intro?.[0] || s.lede}</p>
            <div className="svc-lead-actions">
              <a className="btn btn--signal" href={`tel:${site.phoneHref}`}>
                <Icon name="telefon" size={17} />
                {site.phoneDisplay}
              </a>
              <Link className="btn btn--outline" href="/iletisim">
                Arıza bildir
              </Link>
            </div>
          </div>

          <ul className="svc-facts">
            <li>
              <Icon name="arac" size={19} />
              <span>
                <strong>Yerinde servis</strong>
                Servis aracımız takım ve parçayla gelir
              </span>
            </li>
            <li>
              <Icon name="teshis" size={19} />
              <span>
                <strong>Ölçümle teşhis</strong>
                Söküm öncesi test ve ölçüm yapılır
              </span>
            </li>
            <li>
              <Icon name="garanti" size={19} />
              <span>
                <strong>Yazılı garanti</strong>
                İşçilik ve değişen parça kapsamda
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- Gövde ---------- */}
      <div className="svc-body">
        <div className="shell svc-body-grid">
          {/* --- Yan sütun --- */}
          <aside className="svc-aside">
            <ArticleNav sections={sections} />

            <div className="svc-cta-card">
              <span className="svc-cta-icon">
                <Icon name="telefon" size={20} />
              </span>
              <strong>Arızayı anlatın</strong>
              <p>
                Makinenin markası, modeli ve künye numarasıyla arayın; ekip yola
                çıkmadan olası parçayı belirleyelim.
              </p>
              <a className="btn btn--signal" href={`tel:${site.phoneHref}`}>
                {site.phoneDisplay}
              </a>
            </div>
          </aside>

          {/* --- Ana içerik --- */}
          <article className="svc-article">
            {m ? (
              <MachineArticle service={s} content={m} />
            ) : c ? (
              <>
                {c.intro.slice(1).map((p, i) => (
                  <p key={i} className="svc-p">
                    {p}
                  </p>
                ))}

                {/* ---- Genel bakış ---- */}
                <section id="genel-bakis" className="svc-section">
                  <h2 className="svc-h2">
                    {s.name} nedir, neden uzman servis gerektirir?
                  </h2>
                  <p className="svc-p">{F(shared.definition)}</p>

                  <div className="svc-parts">
                    <p className="svc-parts-label">
                      Birlikte değerlendirilen bileşenler
                    </p>
                    <div className="svc-parts-list">
                      {c.components.map((x) => (
                        <span key={x}>{x}</span>
                      ))}
                    </div>
                    <p className="svc-parts-note">
                      Bir bileşendeki problem çoğu zaman başka bir bileşenin
                      aşırı yüklenmesine, ısınmasına veya erken aşınmasına neden
                      olur. Bu yüzden yalnızca arızalı görünen parça değil,
                      bağlantılı sistemler birlikte incelenir.
                    </p>
                  </div>

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

                  <h3 className="svc-h3">
                    Çalışma koşulları arızayı nasıl etkiler?
                  </h3>
                  <p className="svc-p">{shared.workingConditions}</p>

                  <h3 className="svc-h3">Erken teşhis neden önemlidir?</h3>
                  <p className="svc-p">{F(shared.earlyDiagnosis)}</p>
                </section>

                {/* ---- Belirtiler ---- */}
                <section id="belirtiler" className="svc-section">
                  <h2 className="svc-h2">{s.name} hangi durumlarda gerekir?</h2>
                  <p className="svc-p">{F(shared.symptomIntro)}</p>

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

                  <h3 className="svc-h3">Belirtiye göre ön değerlendirme</h3>
                  <div className="svc-table-wrap">
                    <table className="svc-table">
                      <thead>
                        <tr>
                          <th>Belirti</th>
                          <th>Kontrol edilecek bölge</th>
                        </tr>
                      </thead>
                      <tbody>
                        {c.symptomTable.map((r) => (
                          <tr key={r.s}>
                            <td>{r.s}</td>
                            <td>{r.z}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="svc-note">{shared.tableNote}</p>
                </section>

                {/* ---- Teşhis ---- */}
                <section id="teshis" className="svc-section">
                  <h2 className="svc-h2">Arızanın kaynağı nasıl tespit edilir?</h2>
                  <p className="svc-p">{F(shared.diagnosisIntro)}</p>

                  <ol className="timeline">
                    {c.diagnosis.map((step, i) => (
                      <li key={step}>
                        <span className="timeline-num">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h4>{step}</h4>
                          <p>{shared.diagnosisStepNote}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <p className="svc-note">{shared.diagnosisRecords}</p>
                </section>

                {/* ---- Onarım ---- */}
                <section id="onarim" className="svc-section">
                  <h2 className="svc-h2">Onarım ve revizyon süreci</h2>
                  <p className="svc-p">{F(shared.repairIntro)}</p>

                  <ul className="checklist svc-ops">
                    {c.operations.map((x) => (
                      <li key={x}>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="svc-h3">Söküm ve temizlik</h3>
                  <p className="svc-p">{shared.disassembly}</p>

                  <h3 className="svc-h3">Ölçüm ve parça değerlendirmesi</h3>
                  <p className="svc-p">{shared.measurement}</p>

                  <h3 className="svc-h3">Montaj ve son test</h3>
                  <p className="svc-p">{F(shared.assembly)}</p>
                </section>

                {/* ---- Karar ---- */}
                <section id="karar" className="svc-section">
                  <h2 className="svc-h2">Parça değişimi mi, revizyon mu?</h2>
                  <p className="svc-p">{shared.decisionIntro}</p>

                  <div className="svc-table-wrap">
                    <table className="svc-table">
                      <thead>
                        <tr>
                          <th>Seçenek</th>
                          <th>Ne zaman tercih edilir</th>
                          <th>Dikkat edilecek nokta</th>
                        </tr>
                      </thead>
                      <tbody>
                        {decisionRows.map((r) => (
                          <tr key={r.o}>
                            <td>
                              <strong>{r.o}</strong>
                            </td>
                            <td>{r.w}</td>
                            <td>{r.n}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h3 className="svc-h3">Orijinal, OEM ve muadil parça</h3>
                  <p className="svc-p">{shared.oem}</p>
                </section>

                {/* ---- İhmal ---- */}
                <section id="ihmal" className="svc-section">
                  <h2 className="svc-h2">Bakım ihmali hangi sonuçlara yol açar?</h2>

                  <div className="callout callout--warn">
                    <span className="callout-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3 1.8 20.5h20.4L12 3Z" />
                        <path d="M12 9.5v4.6M12 17.4h.01" />
                      </svg>
                    </span>
                    <p>{c.neglect}</p>
                  </div>

                  <p className="svc-p">{shared.neglectGeneral}</p>

                  <h3 className="svc-h3">Plansız duruş maliyetini azaltmak</h3>
                  <p className="svc-p">{shared.downtime}</p>
                </section>

                {/* ---- Servis seçimi ---- */}
                <section id="servis-secimi" className="svc-section">
                  <h2 className="svc-h2">Doğru servis seçiminde nelere dikkat edilmeli?</h2>
                  <p className="svc-p">{F(shared.criteriaIntro)}</p>

                  <ul className="checklist svc-ops">
                    {c.criteria.map((x) => (
                      <li key={x}>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="svc-h3">Fiyat teklifinde hangi bilgiler bulunmalı?</h3>
                  <p className="svc-p">{shared.quote}</p>
                </section>

                {/* ---- Önleme ---- */}
                <section id="onleme" className="svc-section">
                  <h2 className="svc-h2">Bakım ve arıza önleme önerileri</h2>
                  <p className="svc-p">{F(shared.preventionIntro)}</p>

                  <ul className="checklist svc-ops">
                    {c.prevention.map((x) => (
                      <li key={x}>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="svc-h3">Operatör günlük kontrolünün önemi</h3>
                  <p className="svc-p">{shared.operatorCheck}</p>
                </section>

                {/* ---- Marka ve model ---- */}
                <section id="marka-model" className="svc-section">
                  <h2 className="svc-h2">Marka ve model farklılıkları neden önemlidir?</h2>
                  {shared.brandModel.map((p, i) => (
                    <p key={i} className="svc-p">
                      {F(p)}
                    </p>
                  ))}

                  <h3 className="svc-h3">Seri numarası ve parça kodu neden istenir?</h3>
                  <p className="svc-p">{shared.serial}</p>
                </section>

                {/* ---- SSS ---- */}
                <section id="sss" className="svc-section">
                  <h2 className="svc-h2">Sık sorulan sorular</h2>
                  <FaqList items={c.faq} />
                </section>

              </>
            ) : (
              /* İçerik kaydı olmayan hizmetler için kısa şablon */
              <>
                {s.body.map((p, i) => (
                  <p key={i} className="svc-p">
                    {p}
                  </p>
                ))}
                <section className="svc-section">
                  <h2 className="svc-h2">İşlem kapsamı</h2>
                  <ul className="checklist svc-ops">
                    {s.scope.map((x) => (
                      <li key={x}>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="svc-section">
                  <h2 className="svc-h2">Bu belirtiler varsa bekletmeyin</h2>
                  <div className="symptom-grid">
                    {s.signs.map((x) => (
                      <div className="symptom" key={x}>
                        <span className="symptom-mark" aria-hidden="true">!</span>
                        {x}
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}
          </article>
        </div>
      </div>

      {/* ---------- Bölgeler ---------- */}
      <section className="section section--concrete">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Nerede hizmet veriyoruz</p>
            <h2 className="h2">{s.name} verdiğimiz bölgeler</h2>
            <p className="lede">
              Türkiye genelinde 81 ilde hizmet veriyoruz. Aşağıdaki illerde
              düzenli servis rotamız bulunuyor, diğer illere talep üzerine ekip
              yönlendiriyoruz.
            </p>
          </div>
          <ServiceAreas serviceName={s.name} />
        </div>
      </section>

      {/* ---------- İlgili hizmetler ---------- */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">İlgili hizmetler</p>
            <h2 className="h2">Bu makinede ayrıca baktığımız işler</h2>
            <p className="lede">
              Arıza çoğu zaman tek bir sistemle sınırlı kalmaz. Aynı ziyarette
              aşağıdaki kalemleri de kontrol edip tek raporda topluyoruz.
            </p>
          </div>
          <RelatedServices items={others} />
        </div>
      </section>

      <CtaBand title={`${s.name} için hemen teklif alın`} />

      <JsonLd
        data={serviceJsonLd({
          name: s.title,
          description: s.description,
          url: serviceHref(s.slug),
        })}
      />

      {/* Uzun içerikli sayfalarda makale şeması: yazar ve yayıncı bilgisi */}
      {(c || m) && (
        <JsonLd
          data={articleJsonLd({
            headline: s.title,
            description: s.description,
            url: serviceHref(s.slug),
            image: s.image?.src,
            section: s.group,
          })}
        />
      )}
    </>
  );
}
