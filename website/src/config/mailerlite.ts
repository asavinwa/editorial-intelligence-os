/**
 * MailerLite connection details for the Editorial Intelligence website list.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THIS IS THE ONLY FILE THAT NEEDS EDITING TO GO LIVE.
 *
 * Both values below are empty on purpose. They have not been guessed, and no
 * MailerLite identifier appears anywhere else in the codebase. While either is
 * empty, `KeepInTouch.astro` renders a disabled form that says signup is not
 * open yet, rather than posting addresses into the void.
 *
 * To connect the form:
 *
 *   1. In MailerLite, create the subscriber group for the website list and an
 *      embedded form for it.
 *   2. Open the form's embed code. It contains a URL shaped like
 *        https://assets.mailerlite.com/jsonp/<ACCOUNT_ID>/forms/<FORM_ID>/subscribe
 *      Copy the two numbers out of it.
 *   3. Paste ACCOUNT_ID and FORM_ID below and redeploy.
 *
 * Configure in MailerLite rather than here:
 *   - double opt-in (recommended: on, so consent is confirmed and evidenced)
 *   - the confirmation and welcome emails
 *   - the unsubscribe link in every campaign footer
 *   - the group this form subscribes people to
 *
 * The site holds no MailerLite API key. The form posts directly from the
 * visitor's browser to MailerLite, so no secret is needed and none should be
 * added here — this file is committed to a public repository.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const MAILERLITE = {
  /** Numeric account ID from the MailerLite embed code. */
  accountId: '',

  /** ID of the embedded form addresses are submitted to. */
  formId: '',

  /**
   * Field names MailerLite expects from an embedded form. These are
   * MailerLite's own defaults and only need changing if the form is built with
   * custom field names.
   */
  emailField: 'fields[email]',
  consentField: 'fields[marketing_consent]',
} as const;

/** True once both identifiers have been filled in above. */
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
