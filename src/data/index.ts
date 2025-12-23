/**
 * Barrel export for all centralized data.
 * Import from here for convenience: import { tracks, eventDates } from '@/data';
 * 
 * Note: The hackathon uses "Tracks" terminology (not "Pillars"). 
 * Tracks are aligned with the seven pillars from Mayor Avula's Mayoral Action Plan.
 * Legacy aliases (pillars, pillarRecruitment, etc.) are maintained for backward compatibility.
 */

export * from './eventInfo';
export * from './participantTypes';
export * from './schedule';
export * from './prizes';
export * from './stats';
export * from './opportunity';
export * from './leadership';
export * from './trackEcosystem';
export * from './volunteerRoles';
export * from './sponsorshipPipeline';
export * from './academiaPartners';
export * from './teamDelegation';
export * from './connectors';

// Legacy: focusAreas is deprecated, use tracks from trackEcosystem instead
