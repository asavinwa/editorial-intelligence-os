/**
 * MailerLite connection details for the Editorial Intelligence website list.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * DELIBERATELY NOT USING MAILERLITE'S UNIVERSAL SCRIPT.
 *
 * MailerLite's embed instructions ask for a `<script>` in the site `<head>` on
 * every page. That script sets tracking cookies. The site currently sets none,
 * which is why `/privacy` can say so plainly and the site carries no cookie
 * banner — the strongest privacy claim the site has.
 *
 * So the form posts directly to MailerLite's subscribe endpoint instead. No
 * third-party script, no cookies, no banner, and the form keeps the site's own
 * markup, styling and consent wording. MailerLite still does the work that
 * matters: double opt-in, consent records and unsubscribes.
 *
 * If the universal script is ever added, `/privacy` must change in the same
 * commit. The no-cookie claim is only true while this stays true.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const MAILERLITE = {
  /**
   * Numeric account ID, read from the MailerLite universal snippet:
   *   ml('account', '2563378');
   */
  accountId: '2563378',

  /**
   * Numeric form ID, taken from the form's dashboard URL:
   *   dashboard.mailerlite.com/forms/195199618102855345/overview
   *
   * Confirmed working by an end-to-end signup on 8 August 2026, once the sender
   * domain was authenticated in MailerLite.
   *
   * If this ever changes, note that a wrong ID fails silently: the opaque
   * response means the page shows its confirmation either way. Re-test with a
   * real submission rather than trusting the success state.
   */
  formId: '195199618102855345',

  /**
   * Field names MailerLite expects from an embedded form. These are its
   * defaults; change them only if the form was built with custom field names.
   *
   * `consentField` must match a custom field on the MailerLite form. If the
   * form has no such field, MailerLite ignores the value and the tick is
   * enforced by the browser only — still valid consent, but not evidenced on
   * the MailerLite record. Adding the field is worth the two minutes.
   */
  emailField: 'fields[email]',
  consentField: 'fields[marketing_consent]',
} as const;

/** True once both identifiers are present. */
export function isMailerLiteConfigured(): boolean {
  return MAILERLITE.accountId.trim() !== '' && MAILERLITE.formId.trim() !== '';
}

/**
 * The subscribe endpoint, or undefined while unconfigured — an empty `action`
 * would post the form back to the current page.
 */
export function mailerLiteAction(): string | undefined {
  if (!isMailerLiteConfigured()) return undefined;
  return `https://assets.mailerlite.com/jsonp/${MAILERLITE.accountId}/forms/${MAILERLITE.formId}/subscribe`;
}
