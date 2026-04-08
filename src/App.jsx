import { useState, useEffect } from "react";

const modules = [
  { id: 0, title: "หน้าปก", icon: "📘", color: "#1a365d", gradient: "linear-gradient(135deg, #1a365d 0%, #2d5a87 100%)" },
  { id: 1, title: "Inferior STEMI คืออะไร?", icon: "❤️", color: "#c53030", gradient: "linear-gradient(135deg, #c53030 0%, #e53e3e 100%)" },
  { id: 2, title: "การอ่าน ECG", icon: "📊", color: "#2b6cb0", gradient: "linear-gradient(135deg, #2b6cb0 0%, #4299e1 100%)" },
  { id: 3, title: "Cardiogenic Shock", icon: "⚡", color: "#6b21a8", gradient: "linear-gradient(135deg, #6b21a8 0%, #9333ea 100%)" },
  { id: 4, title: "Initial Management", icon: "💊", color: "#047857", gradient: "linear-gradient(135deg, #047857 0%, #10b981 100%)" },
  { id: 5, title: "Reperfusion & PCI", icon: "🫀", color: "#b45309", gradient: "linear-gradient(135deg, #b45309 0%, #f59e0b 100%)" },
  { id: 6, title: "Guideline 2025 Updates", icon: "📋", color: "#0e7490", gradient: "linear-gradient(135deg, #0e7490 0%, #06b6d4 100%)" },
  { id: 7, title: "SBAR Handover", icon: "📝", color: "#be185d", gradient: "linear-gradient(135deg, #be185d 0%, #ec4899 100%)" },
  { id: 8, title: "แบบทดสอบ", icon: "✅", color: "#7c3aed", gradient: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)" },
];

const CoverPage = () => (
  <div style={{ textAlign: "center", padding: "40px 20px" }}>
    <div style={{ fontSize: "80px", marginBottom: "20px" }}>🫀</div>
    <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#1a365d", marginBottom: "8px", lineHeight: 1.3 }}>
      Inferior STEMI<br />with Cardiogenic Shock
    </h1>
    <p style={{ fontSize: "16px", color: "#4a5568", marginBottom: "24px" }}>
      E-Learning Module สำหรับพยาบาลฉุกเฉิน
    </p>
    <div style={{ background: "linear-gradient(135deg, #ebf4ff, #e9d5ff)", borderRadius: "16px", padding: "24px", margin: "0 auto", maxWidth: "400px" }}>
      <p style={{ fontSize: "13px", color: "#4a5568", marginBottom: "8px" }}>
        📋 Based on <strong>2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline</strong>
      </p>
      <p style={{ fontSize: "13px", color: "#4a5568", marginBottom: "8px" }}>
        📋 2025 ACC Expert Consensus: Cardiogenic Shock
      </p>
      <p style={{ fontSize: "13px", color: "#4a5568", marginBottom: "0" }}>
        📋 DanGer Shock Trial 2024 — Microaxial Flow Pump
      </p>
    </div>
    <div style={{ marginTop: "24px", padding: "16px", background: "#f0f4f8", borderRadius: "12px", maxWidth: "400px", margin: "24px auto 0" }}>
      <p style={{ fontSize: "12px", color: "#718096" }}>
        BDMS Training Center for Clinical Skills<br />
        Simulation Director: Dr. Pakorn Husein<br />
        {new Date().getFullYear()}
      </p>
    </div>
  </div>
);

const InferiorSTEMI = () => (
  <div>
    <SectionTitle icon="❤️" color="#c53030">Inferior STEMI คืออะไร?</SectionTitle>
    <ContentCard>
      <h3 style={styles.h3}>นิยาม</h3>
      <p style={styles.p}>
        <strong>Inferior STEMI</strong> คือภาวะกล้ามเนื้อหัวใจตายเฉียบพลัน (Acute Myocardial Infarction) บริเวณผนังด้านล่างของหัวใจ (Inferior wall) 
        เกิดจากการอุดตันของ <strong>Right Coronary Artery (RCA)</strong> ประมาณ 80-85% ของเคส หรือ <strong>Left Circumflex Artery (LCx)</strong> ประมาณ 15-20%
      </p>
      <InfoBox color="#fed7d7" border="#c53030" icon="⚠️">
        Inferior STEMI มีความเสี่ยงสูงที่จะเกิดภาวะแทรกซ้อน เช่น RV Infarction, AV Block, Cardiogenic Shock โดยเฉพาะเมื่อมี RV involvement
      </InfoBox>
    </ContentCard>

    <ContentCard>
      <h3 style={styles.h3}>🔬 Coronary Anatomy ที่เกี่ยวข้อง</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "12px" }}>
        <MiniCard color="#fee2e2" title="RCA Occlusion (80-85%)" items={["ST↑ II, III, aVF", "อาจมี RV involvement", "Bradycardia / AV Block พบบ่อย", "Reciprocal: ST↓ I, aVL"]} />
        <MiniCard color="#fef3c7" title="LCx Occlusion (15-20%)" items={["ST↑ II, III, aVF", "อาจมี Lateral involvement", "ST↑ V5, V6 ร่วมด้วย", "Reciprocal: ST↓ I, aVL"]} />
      </div>
    </ContentCard>

    <ContentCard>
      <h3 style={styles.h3}>📊 อาการแสดงที่พบบ่อย</h3>
      <div style={{ marginTop: "8px" }}>
        {[
          { s: "เจ็บแน่นหน้าอกกลาง ร้าวไปไหล่ซ้าย/กราม/แขน", pct: 90 },
          { s: "เหงื่อออก (Diaphoresis)", pct: 75 },
          { s: "คลื่นไส้ อาเจียน (Vagal response — พบบ่อยใน Inferior MI)", pct: 60 },
          { s: "หายใจลำบาก (Dyspnea)", pct: 55 },
          { s: "Bradycardia / Hypotension", pct: 40 },
        ].map((item, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "4px" }}>
              <span>{item.s}</span><span style={{ fontWeight: 700 }}>{item.pct}%</span>
            </div>
            <div style={{ background: "#edf2f7", borderRadius: "8px", height: "8px", overflow: "hidden" }}>
              <div style={{ width: `${item.pct}%`, height: "100%", background: "linear-gradient(90deg, #c53030, #e53e3e)", borderRadius: "8px", transition: "width 1s" }} />
            </div>
          </div>
        ))}
      </div>
    </ContentCard>
  </div>
);

const ECGReading = () => (
  <div>
    <SectionTitle icon="📊" color="#2b6cb0">การอ่าน ECG — Inferior STEMI</SectionTitle>
    <ContentCard>
      <h3 style={styles.h3}>🔑 ECG Criteria สำหรับ STEMI (2025 ACC/AHA)</h3>
      <InfoBox color="#ebf8ff" border="#2b6cb0" icon="📋">
        ST-segment elevation ≥1 mm ใน ≥2 contiguous leads ที่ไม่ใช่ V2-V3<br/>
        สำหรับ V2-V3: ≥2 mm ในผู้ชาย ≥40 ปี, ≥2.5 mm ในผู้ชาย &lt;40 ปี, ≥1.5 mm ในผู้หญิง
      </InfoBox>
    </ContentCard>

    <ContentCard>
      <h3 style={styles.h3}>📍 Inferior STEMI Pattern</h3>
      <div style={{ background: "#1a202c", borderRadius: "12px", padding: "20px", marginTop: "12px", color: "#fff" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", textAlign: "center" }}>
          {[
            { lead: "I", change: "ST ↓", color: "#fc8181", type: "reciprocal" },
            { lead: "II", change: "ST ↑↑", color: "#68d391", type: "primary" },
            { lead: "III", change: "ST ↑↑↑", color: "#68d391", type: "primary" },
            { lead: "aVR", change: "—", color: "#a0aec0", type: "normal" },
            { lead: "aVL", change: "ST ↓↓", color: "#fc8181", type: "reciprocal" },
            { lead: "aVF", change: "ST ↑↑", color: "#68d391", type: "primary" },
            { lead: "V1", change: "—", color: "#a0aec0", type: "normal" },
            { lead: "V2", change: "—", color: "#a0aec0", type: "normal" },
            { lead: "V3", change: "—", color: "#a0aec0", type: "normal" },
            { lead: "V4", change: "—", color: "#a0aec0", type: "normal" },
            { lead: "V5", change: "—", color: "#a0aec0", type: "normal" },
            { lead: "V6", change: "—", color: "#a0aec0", type: "normal" },
          ].map((l, i) => (
            <div key={i} style={{ background: l.type === "primary" ? "rgba(72,187,120,0.15)" : l.type === "reciprocal" ? "rgba(252,129,129,0.15)" : "rgba(160,174,192,0.08)", borderRadius: "8px", padding: "8px 4px", border: l.type === "primary" ? "2px solid #48bb78" : l.type === "reciprocal" ? "2px solid #fc8181" : "1px solid #4a5568" }}>
              <div style={{ fontWeight: 800, fontSize: "16px" }}>{l.lead}</div>
              <div style={{ color: l.color, fontSize: "14px", fontWeight: 700 }}>{l.change}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "16px", fontSize: "12px" }}>
          <span>🟢 ST Elevation (Primary)</span>
          <span>🔴 ST Depression (Reciprocal)</span>
          <span>⚪ ปกติ</span>
        </div>
      </div>
    </ContentCard>

    <ContentCard>
      <h3 style={styles.h3}>⚡ เช็ค RV Infarction — Right-sided ECG</h3>
      <InfoBox color="#fefce8" border="#ca8a04" icon="🔑">
        <strong>V4R:</strong> ST elevation ≥1 mm → บ่งชี้ RV Infarction<br/>
        <strong>ข้อห้ามสำคัญ:</strong> ห้ามให้ Nitroglycerin หรือ Morphine ใน RV Infarction เพราะจะทำให้ Preload ลดลงและ BP drop<br/>
        <strong>การรักษา:</strong> IV Fluid Loading (ไม่ใช่ Vasopressor เป็นลำดับแรก)
      </InfoBox>
    </ContentCard>

    <ContentCard>
      <h3 style={styles.h3}>🔍 Reciprocal Changes — ทำไมสำคัญ?</h3>
      <p style={styles.p}>
        Reciprocal ST depression ใน Lead I และ aVL เป็นตัวช่วยยืนยัน Inferior STEMI และเพิ่มความจำเพาะในการวินิจฉัย
        ถ้า ST depression ใน aVL มีขนาดใหญ่กว่า Lead I → ชี้ไปที่ <strong>RCA occlusion</strong>
      </p>
      <div style={{ marginTop: "12px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <MiniCard color="#dbeafe" title="RCA Occlusion Clues" items={["ST↑ III > II", "ST↓ aVL > I", "อาจมี ST↑ V4R (RV MI)", "Bradycardia พบบ่อย"]} />
        <MiniCard color="#fce7f3" title="LCx Occlusion Clues" items={["ST↑ II > III", "ST↑ V5, V6 ร่วมด้วย", "ไม่มี RV involvement", "HR มักปกติหรือเร็ว"]} />
      </div>
    </ContentCard>
  </div>
);

const CardiogenicShockModule = () => (
  <div>
    <SectionTitle icon="⚡" color="#6b21a8">Cardiogenic Shock</SectionTitle>
    <ContentCard>
      <h3 style={styles.h3}>นิยาม (2025 ACC Expert Consensus)</h3>
      <p style={styles.p}>
        Cardiogenic Shock เป็นภาวะที่หัวใจไม่สามารถสูบฉีดเลือดได้เพียงพอต่อความต้องการของร่างกาย ส่งผลให้เกิด End-organ hypoperfusion
      </p>
      <InfoBox color="#f3e8ff" border="#7c3aed" icon="📊">
        <strong>อัตราการเกิด:</strong> ~10% ของผู้ป่วย AMI<br/>
        <strong>อัตราเสียชีวิต:</strong> 40-50% แม้ได้รับการรักษาอย่างเต็มที่<br/>
        <strong>SUSPECT CS Mnemonic (2025):</strong> ใช้ยืนยันการวินิจฉัย
      </InfoBox>
    </ContentCard>

    <ContentCard>
      <h3 style={styles.h3}>🔴 SUSPECT CS — Mnemonic (ACC 2025)</h3>
      <div style={{ marginTop: "12px" }}>
        {[
          { letter: "S", word: "SBP < 90 mmHg", desc: "หรือต้องการ Vasopressor/MCS เพื่อรักษา SBP ≥ 90" },
          { letter: "U", word: "Urine output ลดลง", desc: "< 30 mL/hr หรือต้องใช้ RRT ใหม่" },
          { letter: "S", word: "Skin — cool extremities", desc: "ขาเย็น ซีด mottling" },
          { letter: "P", word: "Pulmonary congestion", desc: "Crackles, edema, CXR congestion" },
          { letter: "E", word: "Elevated lactate", desc: "Lactate > 2 mmol/L" },
          { letter: "C", word: "Cardiac index ลดลง", desc: "CI < 2.2 L/min/m² (ถ้ามี PA catheter)" },
          { letter: "T", word: "sTroke volume ลดลง", desc: "LVEF ลดลง (Echo)" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "10px", alignItems: "flex-start" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "linear-gradient(135deg, #6b21a8, #9333ea)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "18px", flexShrink: 0 }}>
              {item.letter}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1a202c" }}>{item.word}</div>
              <div style={{ fontSize: "12px", color: "#718096" }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </ContentCard>

    <ContentCard>
      <h3 style={styles.h3}>📊 Killip Classification</h3>
      <div style={{ marginTop: "12px" }}>
        {[
          { cls: "I", desc: "ไม่มี Heart Failure", mort: "6%", color: "#c6f6d5" },
          { cls: "II", desc: "Mild HF: Crackles, S3, JVP↑", mort: "17%", color: "#fefce8" },
          { cls: "III", desc: "Pulmonary Edema", mort: "38%", color: "#fed7aa" },
          { cls: "IV", desc: "Cardiogenic Shock", mort: "67%", color: "#fed7d7" },
        ].map((k, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", background: k.color, borderRadius: "10px", marginBottom: "8px" }}>
            <div style={{ fontWeight: 800, fontSize: "20px", width: "50px" }}>Class {k.cls}</div>
            <div style={{ flex: 1, fontSize: "13px" }}>{k.desc}</div>
            <div style={{ fontWeight: 700, fontSize: "14px", color: "#c53030" }}>Mortality {k.mort}</div>
          </div>
        ))}
      </div>
    </ContentCard>

    <ContentCard>
      <h3 style={styles.h3}>⚠️ ข้อสำคัญที่ต้องจำ</h3>
      <InfoBox color="#fff5f5" border="#e53e3e" icon="🚫">
        <strong>ห้าม IV Fluid Bolus</strong> ในผู้ป่วย Cardiogenic Shock ที่มี Pulmonary Congestion<br/>
        (ยกเว้น RV Infarction ที่ไม่มี Pulmonary Edema → ให้ Fluid Challenge ได้)<br/><br/>
        <strong>First-line Vasopressor:</strong> Norepinephrine 0.1-0.3 mcg/kg/min<br/>
        <strong>เป้าหมาย:</strong> MAP ≥ 65 mmHg
      </InfoBox>
    </ContentCard>
  </div>
);

const InitialManagement = () => (
  <div>
    <SectionTitle icon="💊" color="#047857">Initial Management — STEMI</SectionTitle>
    <ContentCard>
      <h3 style={styles.h3}>⏰ Time-Critical Actions (Door-to-ECG ≤ 10 นาที)</h3>
      <div style={{ marginTop: "12px" }}>
        {[
          { time: "0-2 min", action: "Cardiac Monitor + Pulse Oximetry + IV Access (16G × 2)", icon: "📟" },
          { time: "≤ 10 min", action: "12-Lead ECG → อ่านและระบุ STEMI", icon: "📊" },
          { time: "ทันที", action: "O₂ เฉพาะเมื่อ SpO₂ < 90% (2025 Guideline: ไม่ให้ Routine O₂)", icon: "💨" },
          { time: "ทันที", action: "Aspirin 162-325 mg เคี้ยว (Class I)", icon: "💊" },
          { time: "ทันที", action: "P2Y12 Inhibitor: Ticagrelor 180 mg หรือ Prasugrel 60 mg (preferred over Clopidogrel)", icon: "💊" },
          { time: "ทันที", action: "Anticoagulation: UFH 60 u/kg IV bolus (max 4,000 u)", icon: "💉" },
          { time: "ทันที", action: "Activate STEMI Fast Track / Cath Lab Alert", icon: "🚨" },
          { time: "ทันที", action: "ส่ง Lab: Troponin, CBC, BMP, Coagulogram, Lactate", icon: "🧪" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "12px", alignItems: "flex-start" }}>
            <div style={{ background: "#f0fff4", border: "2px solid #047857", borderRadius: "8px", padding: "4px 8px", fontSize: "11px", fontWeight: 700, color: "#047857", minWidth: "70px", textAlign: "center", flexShrink: 0 }}>{item.time}</div>
            <div style={{ fontSize: "13px" }}>{item.icon} {item.action}</div>
          </div>
        ))}
      </div>
    </ContentCard>

    <ContentCard>
      <h3 style={styles.h3}>💊 Antiplatelet Therapy — 2025 Update</h3>
      <InfoBox color="#f0fff4" border="#047857" icon="✅">
        <strong>ASA Loading:</strong> ทั้ง ESC 2023 และ ACC/AHA 2025 → Class I, LOE A<br/>
        <strong>P2Y12 Loading:</strong> ACC/AHA 2025 ยังคง Class I (LOE A) แต่ ESC 2023 ลดระดับเป็น Class IIb<br/>
        <strong>Preferred:</strong> Ticagrelor หรือ Prasugrel มากกว่า Clopidogrel (Class I)<br/>
        <strong>Clopidogrel:</strong> สำรองสำหรับผู้ที่ไม่สามารถใช้ Ticagrelor/Prasugrel ได้
      </InfoBox>
    </ContentCard>

    <ContentCard>
      <h3 style={styles.h3}>🚫 สิ่งที่ต้องระวัง</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "8px" }}>
        <div style={{ background: "#fff5f5", borderRadius: "12px", padding: "16px", borderLeft: "4px solid #e53e3e" }}>
          <div style={{ fontWeight: 700, color: "#c53030", marginBottom: "4px" }}>❌ ห้ามทำ</div>
          <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "12px", lineHeight: 1.8 }}>
            <li>ให้ O₂ Routine ถ้า SpO₂ ≥ 90%</li>
            <li>ให้ NTG/Morphine ถ้าสงสัย RV MI</li>
            <li>IV Fluid Bolus ถ้ามี Pulmonary Edema</li>
            <li>ชะลอ ECG เกิน 10 นาที</li>
          </ul>
        </div>
        <div style={{ background: "#f0fff4", borderRadius: "12px", padding: "16px", borderLeft: "4px solid #38a169" }}>
          <div style={{ fontWeight: 700, color: "#276749", marginBottom: "4px" }}>✅ ต้องทำ</div>
          <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "12px", lineHeight: 1.8 }}>
            <li>หยุด Metformin (ก่อน Contrast)</li>
            <li>Right-sided ECG (V4R)</li>
            <li>Bedside Echo เมื่อ Unstable</li>
            <li>บันทึก Door-to-ECG time</li>
          </ul>
        </div>
      </div>
    </ContentCard>
  </div>
);

const ReperfusionPCI = () => (
  <div>
    <SectionTitle icon="🫀" color="#b45309">Reperfusion Strategy & PCI</SectionTitle>
    <ContentCard>
      <h3 style={styles.h3}>⏰ Time Targets (2025 ACC/AHA)</h3>
      <div style={{ marginTop: "12px" }}>
        {[
          { target: "Door-to-ECG", time: "≤ 10 นาที", cls: "Class I", color: "#c6f6d5" },
          { target: "Door-to-Device (Primary PCI)", time: "≤ 90 นาที", cls: "Class I", color: "#c6f6d5" },
          { target: "FMC-to-Device (Transfer)", time: "≤ 120 นาที", cls: "Class I", color: "#fefce8" },
          { target: "Door-to-Needle (Fibrinolysis)", time: "≤ 30 นาที", cls: "ถ้า PCI ไม่ทันใน 120 min", color: "#fed7aa" },
        ].map((t, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", padding: "12px", background: t.color, borderRadius: "10px", marginBottom: "8px", gap: "12px" }}>
            <div style={{ fontWeight: 700, flex: 1, fontSize: "14px" }}>{t.target}</div>
            <div style={{ fontWeight: 800, fontSize: "18px", color: "#b45309" }}>{t.time}</div>
            <div style={{ fontSize: "11px", color: "#666", maxWidth: "80px" }}>{t.cls}</div>
          </div>
        ))}
      </div>
    </ContentCard>

    <ContentCard>
      <h3 style={styles.h3}>🆕 Key Changes — 2025 Guideline</h3>
      <div style={{ marginTop: "8px" }}>
        {[
          { title: "Complete Revascularization", desc: "แนะนำ PCI ทั้ง Culprit + Non-culprit lesions ใน STEMI ที่มี MVD (สามารถทำในครั้งเดียวหรือ Staged)", tag: "Class I", color: "#047857" },
          { title: "Radial Access", desc: "Radial approach preferred มากกว่า Femoral → ลด Bleeding, Vascular complications, และ Mortality", tag: "Class I", color: "#047857" },
          { title: "Intravascular Imaging", desc: "IVUS/OCT guided PCI ยกระดับเป็น Class I (จากเดิม Class IIa ใน 2021)", tag: "Class I ↑", color: "#2b6cb0" },
          { title: "Cardiogenic Shock + PCI", desc: "ทำ PCI เฉพาะ Culprit vessel เท่านั้น — ห้ามทำ Non-culprit ในเวลาเดียวกัน", tag: "Class III", color: "#c53030" },
          { title: "Microaxial Flow Pump", desc: "Impella ใน AMI-CS → Class IIa (จาก DanGer Shock Trial 2024) — ลด Mortality แต่เพิ่ม Vascular complications", tag: "Class IIa ★", color: "#7c3aed" },
        ].map((item, i) => (
          <div key={i} style={{ padding: "14px", background: "#fafafa", borderRadius: "12px", marginBottom: "10px", borderLeft: `4px solid ${item.color}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
              <span style={{ fontWeight: 700, fontSize: "14px" }}>{item.title}</span>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#fff", background: item.color, padding: "2px 8px", borderRadius: "12px" }}>{item.tag}</span>
            </div>
            <p style={{ fontSize: "12px", color: "#4a5568", margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </ContentCard>
  </div>
);

const Guidelines2025 = () => (
  <div>
    <SectionTitle icon="📋" color="#0e7490">2025 ACC/AHA Guideline Updates</SectionTitle>
    <ContentCard>
      <h3 style={styles.h3}>📌 Top Take-Home Messages</h3>
      <div style={{ marginTop: "12px" }}>
        {[
          { num: 1, text: "DAPT (ASA + P2Y12) อย่างน้อย 12 เดือนเป็น Default strategy สำหรับผู้ที่ไม่มี High Bleeding Risk" },
          { num: 2, text: "Ticagrelor/Prasugrel preferred มากกว่า Clopidogrel — Clopidogrel สำรองสำหรับผู้ที่ใช้ไม่ได้" },
          { num: 3, text: "Complete Revascularization ใน STEMI + MVD (Culprit + Non-culprit) — Single session หรือ Staged" },
          { num: 4, text: "Radial Access → Class I สำหรับ ACS ทุกประเภท เพื่อลด Bleeding + Mortality" },
          { num: 5, text: "Intravascular Imaging (IVUS/OCT) → ยกระดับเป็น Class I สำหรับ PCI guidance" },
          { num: 6, text: "O₂ Supplementation เฉพาะเมื่อ SpO₂ < 90% — ไม่ให้ Routine O₂ แม้ใน AMI" },
          { num: 7, text: "Beta-blockers within 24 hr — แต่ห้ามใน Cardiogenic Shock หรือ New HF" },
          { num: 8, text: "Microaxial Flow Pump (Impella) → Class IIa สำหรับ AMI-CS (DanGer Shock Trial)" },
          { num: 9, text: "Transfer CS patients ไปยัง Center ที่มี Multidisciplinary Shock Team → Class I" },
        ].map((item) => (
          <div key={item.num} style={{ display: "flex", gap: "12px", marginBottom: "10px", alignItems: "flex-start" }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "linear-gradient(135deg, #0e7490, #06b6d4)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "13px", flexShrink: 0 }}>{item.num}</div>
            <p style={{ fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{item.text}</p>
          </div>
        ))}
      </div>
    </ContentCard>

    <ContentCard>
      <h3 style={styles.h3}>🆚 ESC 2023 vs ACC/AHA 2025 — ความแตกต่างสำคัญ</h3>
      <div style={{ overflowX: "auto", marginTop: "12px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
          <thead>
            <tr style={{ background: "#e2e8f0" }}>
              <th style={styles.th}>หัวข้อ</th>
              <th style={styles.th}>ESC 2023</th>
              <th style={styles.th}>ACC/AHA 2025</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["P2Y12 Loading (Pre-PCI)", "Class IIb (ลดระดับ)", "Class I (ยังแนะนำ)"],
              ["Complete Revasc (STEMI)", "Class I", "Class I"],
              ["Radial Access", "Class I", "Class I"],
              ["Impella ใน CS", "ไม่มี (2023)", "Class IIa (ใหม่)"],
              ["O₂ Routine", "ไม่แนะนำ", "ไม่แนะนำ ถ้า SpO₂ ≥ 90%"],
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #e2e8f0" }}>
                <td style={{ ...styles.td, fontWeight: 700 }}>{row[0]}</td>
                <td style={styles.td}>{row[1]}</td>
                <td style={styles.td}>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ContentCard>

    <ContentCard>
      <h3 style={styles.h3}>📚 References</h3>
      <div style={{ fontSize: "11px", color: "#718096", lineHeight: 1.8, marginTop: "8px" }}>
        <p style={{ margin: "0 0 4px" }}>1. Rao SV, et al. 2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for ACS. Circulation. 2025;151:e771-e862.</p>
        <p style={{ margin: "0 0 4px" }}>2. Byrne RA, et al. 2023 ESC Guidelines for ACS. Eur Heart J. 2023;44:3720-3826.</p>
        <p style={{ margin: "0 0 4px" }}>3. Moller JE, et al. Microaxial flow pump in infarct-related cardiogenic shock (DanGer Shock). NEJM. 2024;390:1382-1393.</p>
        <p style={{ margin: "0 0 4px" }}>4. ACC 2025 Expert Consensus: Evaluation and Management of Cardiogenic Shock. JACC. 2025.</p>
      </div>
    </ContentCard>
  </div>
);

const SBARHandover = () => (
  <div>
    <SectionTitle icon="📝" color="#be185d">SBAR Handover — Cath Lab Transfer</SectionTitle>
    <ContentCard>
      <h3 style={styles.h3}>📋 SBAR Template — Inferior STEMI + CS</h3>
      <div style={{ marginTop: "12px" }}>
        {[
          { letter: "S", title: "Situation", color: "#c53030", bg: "#fff5f5",
            content: "ผู้ป่วยชาย 58 ปี Inferior STEMI with Cardiogenic Shock (Killip IV)\nDoor-to-ECG: 8 นาที | Door-to-Decision: 22 นาที" },
          { letter: "B", title: "Background", color: "#2b6cb0", bg: "#ebf8ff",
            content: "PMH: DM Type 2, HT, Dyslipidemia, สูบบุหรี่ 20 ปี\nMedications given: ASA 300 mg + Ticagrelor 180 mg + Heparin UFH + NE drip\nAllergy: NKDA" },
          { letter: "A", title: "Assessment", color: "#047857", bg: "#f0fff4",
            content: "Vitals: BP 86/60 (on NE), HR 110, SpO₂ 95% (O₂ 4L)\nEcho: EF 25%, Inferior wall hypokinesis\nLab: Troponin 2.8, Cr 1.6, K+ 5.1, Lactate 6.2" },
          { letter: "R", title: "Recommendation", color: "#7c3aed", bg: "#f5f3ff",
            content: "Primary PCI เร่งด่วน\nระวัง Contrast nephropathy (Cr 1.6, DM, Metformin หยุดแล้ว)\nIABP / Impella standby\nUrine output monitoring (Foley in situ)" },
        ].map((s) => (
          <div key={s.letter} style={{ background: s.bg, borderRadius: "12px", padding: "16px", marginBottom: "12px", borderLeft: `5px solid ${s.color}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: s.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "20px" }}>{s.letter}</div>
              <span style={{ fontWeight: 700, fontSize: "16px", color: s.color }}>{s.title}</span>
            </div>
            <pre style={{ fontSize: "12px", color: "#2d3748", margin: 0, whiteSpace: "pre-wrap", fontFamily: "inherit", lineHeight: 1.7 }}>{s.content}</pre>
          </div>
        ))}
      </div>
    </ContentCard>
  </div>
);

// Quiz module
const quizQuestions = [
  { q: "Inferior STEMI พบ ST elevation ใน Lead ใด?", opts: ["V1-V4", "I, aVL", "II, III, aVF", "V5-V6"], ans: 2 },
  { q: "2025 ACC/AHA แนะนำ Door-to-Device time สำหรับ Primary PCI คือ?", opts: ["≤ 30 นาที", "≤ 60 นาที", "≤ 90 นาที", "≤ 120 นาที"], ans: 2 },
  { q: "Vasopressor ตัวแรกที่แนะนำใน Cardiogenic Shock คือ?", opts: ["Dopamine", "Dobutamine", "Norepinephrine", "Epinephrine"], ans: 2 },
  { q: "ข้อใดเป็น Class I recommendation ใหม่ใน 2025 Guideline?", opts: ["Routine O₂ ใน AMI", "Intravascular Imaging (IVUS/OCT) สำหรับ PCI", "Fibrinolysis เป็นทางเลือกแรก", "Clopidogrel preferred"], ans: 1 },
  { q: "ผู้ป่วย STEMI + Cardiogenic Shock ควรทำ PCI อย่างไร?", opts: ["PCI Culprit + Non-culprit ในครั้งเดียว", "PCI เฉพาะ Culprit vessel เท่านั้น", "ไม่ทำ PCI ให้ Fibrinolysis แทน", "รอ Staged PCI หลัง Stabilize"], ans: 1 },
  { q: "DanGer Shock Trial 2024 ศึกษาเกี่ยวกับอะไร?", opts: ["IABP ใน AMI", "Impella (Microaxial Flow Pump) ใน AMI-CS", "ECMO ใน Cardiac Arrest", "Fibrinolysis vs PCI"], ans: 1 },
  { q: "ข้อใดเป็นข้อห้ามใน RV Infarction?", opts: ["Aspirin", "IV Normal Saline", "Nitroglycerin", "Heparin"], ans: 2 },
  { q: "V4R ST elevation ≥ 1 mm บ่งชี้ภาวะใด?", opts: ["Anterior STEMI", "RV Infarction", "Pericarditis", "Aortic Dissection"], ans: 1 },
  { q: "ตาม 2025 Guideline ควรให้ O₂ เมื่อใด?", opts: ["ผู้ป่วย AMI ทุกราย", "SpO₂ < 94%", "SpO₂ < 90%", "เมื่อมี Chest pain"], ans: 2 },
  { q: "P2Y12 Inhibitor ตัวใดที่ 2025 ACC/AHA preferred?", opts: ["Clopidogrel", "Ticagrelor/Prasugrel", "Cangrelor", "Vorapaxar"], ans: 1 },
];

const QuizModule = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(Array(quizQuestions.length).fill(null));
  const [done, setDone] = useState(false);

  const handleAnswer = (idx) => {
    if (answered[current] !== null) return;
    setSelected(idx);
    const newAnswered = [...answered];
    newAnswered[current] = idx;
    setAnswered(newAnswered);
    if (idx === quizQuestions[current].ans) setScore(s => s + 1);
  };

  const next = () => {
    if (current < quizQuestions.length - 1) { setCurrent(c => c + 1); setSelected(null); }
    else setDone(true);
  };

  if (done) {
    const pct = Math.round((score / quizQuestions.length) * 100);
    return (
      <div>
        <SectionTitle icon="✅" color="#7c3aed">ผลการทดสอบ</SectionTitle>
        <ContentCard>
          <div style={{ textAlign: "center", padding: "30px 0" }}>
            <div style={{ fontSize: "64px", marginBottom: "16px" }}>{pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📚"}</div>
            <div style={{ fontSize: "48px", fontWeight: 800, color: pct >= 80 ? "#047857" : pct >= 60 ? "#b45309" : "#c53030" }}>{pct}%</div>
            <p style={{ fontSize: "18px", color: "#4a5568", marginTop: "8px" }}>{score} / {quizQuestions.length} ข้อ</p>
            <p style={{ fontSize: "14px", color: "#718096", marginTop: "12px" }}>
              {pct >= 80 ? "ยอดเยี่ยม! คุณมีความเข้าใจดีมาก" : pct >= 60 ? "ดี! ลองทบทวนบทเรียนเพิ่มเติม" : "ควรทบทวนเนื้อหาอีกครั้ง"}
            </p>
            <button onClick={() => { setCurrent(0); setSelected(null); setScore(0); setAnswered(Array(quizQuestions.length).fill(null)); setDone(false); }}
              style={{ marginTop: "20px", padding: "12px 32px", background: "linear-gradient(135deg, #7c3aed, #a78bfa)", color: "#fff", border: "none", borderRadius: "12px", fontWeight: 700, fontSize: "15px", cursor: "pointer" }}>
              ทำแบบทดสอบอีกครั้ง
            </button>
          </div>
        </ContentCard>
      </div>
    );
  }

  const q = quizQuestions[current];
  return (
    <div>
      <SectionTitle icon="✅" color="#7c3aed">แบบทดสอบ</SectionTitle>
      <ContentCard>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <span style={{ fontSize: "13px", color: "#718096" }}>ข้อ {current + 1} / {quizQuestions.length}</span>
          <span style={{ fontSize: "13px", fontWeight: 700, color: "#7c3aed" }}>คะแนน: {score}</span>
        </div>
        <div style={{ background: "#edf2f7", borderRadius: "8px", height: "6px", marginBottom: "20px", overflow: "hidden" }}>
          <div style={{ width: `${((current + 1) / quizQuestions.length) * 100}%`, height: "100%", background: "linear-gradient(90deg, #7c3aed, #a78bfa)", transition: "width 0.3s" }} />
        </div>
        <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1a202c", marginBottom: "16px", lineHeight: 1.5 }}>{q.q}</h3>
        {q.opts.map((opt, i) => {
          const isAnswered = answered[current] !== null;
          const isCorrect = i === q.ans;
          const isSelected = answered[current] === i;
          let bg = "#f7fafc", border = "#e2e8f0", color = "#2d3748";
          if (isAnswered) {
            if (isCorrect) { bg = "#f0fff4"; border = "#38a169"; color = "#276749"; }
            else if (isSelected) { bg = "#fff5f5"; border = "#e53e3e"; color = "#c53030"; }
          }
          return (
            <div key={i} onClick={() => handleAnswer(i)}
              style={{ padding: "14px 16px", background: bg, border: `2px solid ${border}`, borderRadius: "12px", marginBottom: "10px", cursor: isAnswered ? "default" : "pointer", transition: "all 0.2s", fontSize: "14px", color, fontWeight: isSelected ? 700 : 400 }}>
              {isAnswered && isCorrect && "✅ "}{isAnswered && isSelected && !isCorrect && "❌ "}{opt}
            </div>
          );
        })}
        {answered[current] !== null && (
          <button onClick={next}
            style={{ marginTop: "12px", width: "100%", padding: "14px", background: "linear-gradient(135deg, #7c3aed, #a78bfa)", color: "#fff", border: "none", borderRadius: "12px", fontWeight: 700, fontSize: "15px", cursor: "pointer" }}>
            {current < quizQuestions.length - 1 ? "ข้อถัดไป →" : "ดูผลคะแนน"}
          </button>
        )}
      </ContentCard>
    </div>
  );
};

// Shared components
const SectionTitle = ({ icon, color, children }) => (
  <div style={{ background: `linear-gradient(135deg, ${color}, ${color}dd)`, borderRadius: "16px", padding: "20px", marginBottom: "16px", color: "#fff" }}>
    <div style={{ fontSize: "28px", marginBottom: "6px" }}>{icon}</div>
    <h2 style={{ fontSize: "20px", fontWeight: 800, margin: 0 }}>{children}</h2>
  </div>
);

const ContentCard = ({ children }) => (
  <div style={{ background: "#fff", borderRadius: "16px", padding: "20px", marginBottom: "16px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
    {children}
  </div>
);

const InfoBox = ({ color, border, icon, children }) => (
  <div style={{ background: color, borderLeft: `4px solid ${border}`, borderRadius: "8px", padding: "14px 16px", marginTop: "12px", fontSize: "13px", lineHeight: 1.7 }}>
    <span style={{ fontSize: "16px", marginRight: "6px" }}>{icon}</span>{children}
  </div>
);

const MiniCard = ({ color, title, items }) => (
  <div style={{ background: color, borderRadius: "12px", padding: "14px" }}>
    <div style={{ fontWeight: 700, fontSize: "13px", marginBottom: "8px" }}>{title}</div>
    <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "12px", lineHeight: 1.8 }}>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  </div>
);

const styles = {
  h3: { fontSize: "16px", fontWeight: 700, color: "#1a202c", margin: "0 0 8px" },
  p: { fontSize: "13px", color: "#4a5568", lineHeight: 1.8, margin: "0 0 8px" },
  th: { padding: "8px", textAlign: "left", fontWeight: 700, fontSize: "12px", borderBottom: "2px solid #cbd5e0" },
  td: { padding: "8px", fontSize: "12px", color: "#4a5568" },
};

const moduleComponents = [CoverPage, InferiorSTEMI, ECGReading, CardiogenicShockModule, InitialManagement, ReperfusionPCI, Guidelines2025, SBARHandover, QuizModule];

export default function App() {
  const [activeModule, setActiveModule] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const Component = moduleComponents[activeModule];

  return (
    <div style={{ minHeight: "100vh", background: "#f0f4f8", fontFamily: "'Sarabun', 'Noto Sans Thai', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700;800&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ position: "sticky", top: 0, zIndex: 100, background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "22px" }}>🫀</span>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 800, color: "#1a365d" }}>Inferior STEMI + CS</div>
            <div style={{ fontSize: "11px", color: "#718096" }}>E-Book • Guideline 2025</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "2px solid #e2e8f0", borderRadius: "10px", padding: "6px 12px", cursor: "pointer", fontSize: "13px", fontWeight: 700, color: "#4a5568" }}>
          {menuOpen ? "✕ ปิด" : "☰ บทเรียน"}
        </button>
      </div>

      {/* Module menu */}
      {menuOpen && (
        <div style={{ position: "fixed", top: "58px", left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", zIndex: 99 }} onClick={() => setMenuOpen(false)}>
          <div style={{ background: "#fff", maxHeight: "70vh", overflow: "auto", borderRadius: "0 0 20px 20px", padding: "8px" }} onClick={e => e.stopPropagation()}>
            {modules.map((m) => (
              <div key={m.id} onClick={() => { setActiveModule(m.id); setMenuOpen(false); }}
                style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", borderRadius: "12px", cursor: "pointer", background: activeModule === m.id ? "#ebf8ff" : "transparent", marginBottom: "2px" }}>
                <span style={{ fontSize: "20px" }}>{m.icon}</span>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: activeModule === m.id ? 700 : 400, color: activeModule === m.id ? "#2b6cb0" : "#2d3748" }}>
                    {m.id > 0 ? `${m.id}. ` : ""}{m.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Progress bar */}
      <div style={{ height: "3px", background: "#e2e8f0" }}>
        <div style={{ height: "100%", width: `${((activeModule + 1) / modules.length) * 100}%`, background: modules[activeModule].gradient, transition: "width 0.3s" }} />
      </div>

      {/* Content */}
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "16px" }}>
        <Component />
      </div>

      {/* Navigation */}
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 16px 24px", display: "flex", gap: "12px" }}>
        {activeModule > 0 && (
          <button onClick={() => setActiveModule(a => a - 1)}
            style={{ flex: 1, padding: "14px", background: "#fff", border: "2px solid #e2e8f0", borderRadius: "14px", fontSize: "14px", fontWeight: 700, cursor: "pointer", color: "#4a5568" }}>
            ← ก่อนหน้า
          </button>
        )}
        {activeModule < modules.length - 1 && (
          <button onClick={() => setActiveModule(a => a + 1)}
            style={{ flex: 1, padding: "14px", background: modules[activeModule].gradient, border: "none", borderRadius: "14px", color: "#fff", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>
            ถัดไป →
          </button>
        )}
      </div>
    </div>
  );
}
