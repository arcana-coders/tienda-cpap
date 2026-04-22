/**
 * Centralized utility for string cleaning and rebranding.
 * Replaces references to "Amazon" and its variants with "CPAP-México".
 */
export function cleanText(text: string | null | undefined): string {
  if (!text) return ''

  return text
    // Replace Amazon.com / Amazon USA / Amazon with CPAP-México
    // Regex handles boundaries to avoid mangling URLs or parts of words if necessary,
    // though for branding we're usually safe with word boundaries or negative lookbehind.
    .replace(/(?<![\/.:\w-])Amazon\.com(?![/.\w-])/gi, 'CPAP-México')
    .replace(/(?<![\/.:\w-])Amazon USA(?![/.\w-])/gi, 'CPAP-México')
    .replace(/(?<![\/.:\w-])Amazon(?![/.\w-])/gi, 'CPAP-México')
    // Also handle previous branding if any persists
    .replace(/The Respiratory Atelier/gi, 'CPAP-México')
}
