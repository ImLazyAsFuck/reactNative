export const COLORS = {
  primary: '#0066FF',
  primaryDark: '#0052CC',
  primaryLight: '#3385FF',
  secondary: '#6C757D',
  secondaryDark: '#545B62',
  secondaryLight: '#ADB5BD',
  text: '#212529',
  textSecondary: '#6C757D',
  textLight: '#ADB5BD',
  textWhite: '#FFFFFF',
  background: '#FFFFFF',
  backgroundSecondary: '#F8F9FA',
  backgroundDark: '#343A40',
  success: '#28A745',
  warning: '#FFC107',
  error: '#DC3545',
  info: '#17A2B8',
  border: '#DEE2E6',
  borderLight: '#E9ECEF',
  borderDark: '#ADB5BD',
  inputBackground: '#FFFFFF',
  inputBorder: '#CED4DA',
  inputFocus: '#80BDFF',
  inputPlaceholder: '#6C757D',
} as const;

export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  small: 14,
  medium: 16,
  large: 18,
  title: 20,
  heading: 24,
  display: 32,
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  tiny: 4,
  small: 8,
  medium: 16,
  large: 24,
  huge: 32,
} as const;

export const BORDER_RADIUS = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
  small: 4,
  medium: 8,
  large: 12,
  round: 9999,
} as const;

export const FONT_WEIGHTS = {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
} as const;

export const SHADOWS = {
  none: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  md: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lg: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
} as const;

export const CONTAINER_STYLES = {
  main: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  centered: {
    flex: 1,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    padding: SPACING.md,
  },
  padded: {
    padding: SPACING.md,
  },
  card: {
    backgroundColor: COLORS.background,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    ...SHADOWS.sm,
  },
  form: {
    width: '100%',
    padding: SPACING.md,
    gap: SPACING.sm,
  },
  row: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
  },
  column: {
    flexDirection: 'column' as const,
  },
  wrapper: {
    width: '100%',
    flex: 1,
    flexDirection: 'column' as const,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  },
} as const;

export const INPUT_STYLES = {
  base: {
    width: '100%',
    padding: SPACING.sm,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.inputBackground,
    fontSize: FONT_SIZES.md,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    color: COLORS.text,
  },
  focused: {
    borderColor: COLORS.inputFocus,
    ...SHADOWS.sm,
  },
  error: {
    borderColor: COLORS.error,
  },
} as const;

export const BUTTON_STYLES = {
  base: {
    width: '100%',
    padding: SPACING.sm,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  secondary: {
    backgroundColor: COLORS.secondary,
  },
  success: {
    backgroundColor: COLORS.success,
  },
  error: {
    backgroundColor: COLORS.error,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
} as const;

export const TEXT_STYLES = {
  title: {
    fontSize: FONT_SIZES.title,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.text,
  },
  heading: {
    fontSize: FONT_SIZES.heading,
    fontWeight: FONT_WEIGHTS.semibold,
    color: COLORS.text,
  },
  body: {
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.normal,
    color: COLORS.text,
  },
  caption: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.normal,
    color: COLORS.textSecondary,
  },
  button: {
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.semibold,
    color: COLORS.textWhite,
    textAlign: 'center' as const,
  },
} as const;
