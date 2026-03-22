# Résumé source of truth

Use this file (or your Google Doc) to fill in the site:

1. **About** — Edit `src/components/About.tsx` (summary paragraph).
2. **Career** — Edit `src/components/Career.tsx` (titles, companies, years, bullets).
3. **Work carousel** — Edit `src/components/Work.tsx` (project titles, stack, images in `public/images/`).
4. **Contact** — Edit `src/components/Contact.tsx` and `src/components/Navbar.tsx` (email, social URLs).

If your résumé lives in Google Docs, keep the share link here and mirror it in code:

`https://docs.google.com/document/d/1FyXB-z2W0zdh0tGcTYq0IQ-gLmtYOSD9xinQC-PXzbI/edit?usp=sharing`

The **RESUME** button uses `RESUME_GOOGLE_DOC_URL` in `src/constants.ts` — update both places when the doc link changes.

**LinkedIn** is set in `src/constants.ts` as `LINKEDIN_URL`. **ApplyFirst** uses `APPLYFIRST_URL` in the same file (Vercel deploy URL).

To offer a PDF download instead, add `public/Khizer_Mahmud_Resume.pdf` and set `RESUME_GOOGLE_DOC_URL` to `/Khizer_Mahmud_Resume.pdf` (or split into two links in `SocialIcons.tsx`).
