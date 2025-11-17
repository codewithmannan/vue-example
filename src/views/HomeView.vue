<template>
  <div class="dash-dashboard">
    <!-- Grid -->
    <div class="dash-grid" v-if="authStore?.userProfile">
      <!-- Profile Card -->
      <div class="dash-card dash-profile-card">
        <div class="dash-avatar">{{ getFirstLetter }}</div>
        <h1 class="dash-profile-name">{{ fullName }}</h1>
        <div class="dash-profile-role">{{ authStore.userProfile.role }}</div>

        <div class="dash-profile-stats">
          <div class="dash-stat">
            <div class="dash-stat-value">
              {{ authStore.userProfile.role ? '1' : '0' }}
            </div>
            <div class="dash-stat-label">Active Role</div>
          </div>
          <div class="dash-stat">
            <div class="dash-stat-value">
              {{ authStore.userProfile.address.country }}
            </div>
            <div class="dash-stat-label">Country</div>
          </div>
          <div class="dash-stat">
            <div class="dash-stat-value">
              {{ formatDate(authStore.userProfile.createdAt) }}
            </div>
            <div class="dash-stat-label">Joined</div>
          </div>
        </div>
      </div>

      <!-- Personal Information -->
      <div class="dash-card">
        <div class="dash-card-header">
          <i class="fa-solid fa-user"></i>
          <h2>Personal Information</h2>
        </div>

        <div class="dash-info-item">
          <i class="fa-solid fa-signature"></i>
          <div class="dash-info-content">
            <div class="dash-info-label">Full Name</div>
            <div class="dash-info-value">{{ fullName }}</div>
          </div>
        </div>

        <div class="dash-info-item">
          <i class="fa-solid fa-envelope"></i>
          <div class="dash-info-content">
            <div class="dash-info-label">Email Address</div>
            <div class="dash-info-value">{{ authStore.userProfile.email || 'N/A' }}</div>
          </div>
        </div>

        <div class="dash-info-item">
          <i class="fa-solid fa-user-tag"></i>
          <div class="dash-info-content">
            <div class="dash-info-label">Role</div>
            <div class="dash-info-value">
              <span class="dash-badge dash-badge-primary">{{ authStore.userProfile.role }}</span>
            </div>
          </div>
        </div>

        <div class="dash-info-item">
          <i class="fa-solid fa-calendar-alt"></i>
          <div class="dash-info-content">
            <div class="dash-info-label">Member Since</div>
            <div class="dash-info-value">
              {{ formatDate(authStore.userProfile.createdAt, 'medium') }}
            </div>
          </div>
        </div>
      </div>

      <!-- Address Information -->
      <div class="dash-card">
        <div class="dash-card-header">
          <i class="fa-solid fa-map-marker-alt"></i>
          <h2>Address Information</h2>
        </div>

        <div class="dash-address-section">
          <div class="dash-address-row">
            <i class="fa-solid fa-road"></i>
            <div class="dash-address-content">
              <div class="dash-address-label">Street</div>
              <div class="dash-address-value">
                {{ authStore?.userProfile?.address?.street || 'N/A' }}
              </div>
            </div>
          </div>

          <div class="dash-address-row">
            <i class="fa-solid fa-city"></i>
            <div class="dash-address-content">
              <div class="dash-address-label">City</div>
              <div class="dash-address-value">
                {{ authStore?.userProfile?.address?.city || 'N/A' }}
              </div>
            </div>
          </div>

          <div class="dash-address-row">
            <i class="fa-solid fa-map"></i>
            <div class="dash-address-content">
              <div class="dash-address-label">State</div>
              <div class="dash-address-value">
                {{ authStore?.userProfile?.address?.state || 'N/A' }}
              </div>
            </div>
          </div>

          <div class="dash-address-row">
            <i class="fa-solid fa-mail-bulk"></i>
            <div class="dash-address-content">
              <div class="dash-address-label">Postal Code</div>
              <div class="dash-address-value">
                {{ authStore?.userProfile?.address?.postalCode || 'N/A' }}
              </div>
            </div>
          </div>

          <div class="dash-address-row">
            <i class="fa-solid fa-flag"></i>
            <div class="dash-address-content">
              <div class="dash-address-label">Country</div>
              <div class="dash-address-value">
                {{ authStore?.userProfile?.address?.country || 'N/A' }}
              </div>
            </div>
          </div>
        </div>

        <div class="dash-info-item" style="margin-top: 20px">
          <i class="fa-solid fa-globe-asia"></i>
          <div class="dash-info-content">
            <div class="dash-info-label">Location</div>
            <div class="dash-info-value">
              {{ stateComaCountry }}
            </div>
          </div>
        </div>
      </div>

      <!-- Account Status -->
      <div class="dash-card">
        <div class="dash-card-header">
          <i class="fa-solid fa-shield-alt"></i>
          <h2>Account Status</h2>
        </div>

        <div class="dash-info-item">
          <i class="fa-solid fa-check-circle"></i>
          <div class="dash-info-content">
            <div class="dash-info-label">Verification</div>
            <div class="dash-info-value">
              <span class="dash-badge dash-badge-success">Verified</span>
            </div>
          </div>
        </div>

        <div class="dash-info-item">
          <i class="fa-solid fa-user-lock"></i>
          <div class="dash-info-content">
            <div class="dash-info-label">Account Type</div>
            <div class="dash-info-value">
              <span class="dash-badge dash-badge-info">
                {{
                  authStore.userProfile?.role === 'Admin'
                    ? 'Administrator'
                    : authStore.userProfile?.role
                }}
              </span>
            </div>
          </div>
        </div>

        <div class="dash-info-item">
          <i class="fa-solid fa-calendar-check"></i>
          <div class="dash-info-content">
            <div class="dash-info-label">Last Updated</div>
            <div class="dash-info-value">
              {{ formatDate(authStore.userProfile.createdAt, 'medium') }}
            </div>
          </div>
        </div>

        <div class="dash-info-item">
          <i class="fa-solid fa-id-card"></i>
          <div class="dash-info-content">
            <div class="dash-info-label">User ID</div>
            <div class="dash-info-value">
              {{ authStore.userProfile._id }}
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="dash-card">
        <div class="dash-card-header">
          <i class="fa-solid fa-history"></i>
          <h2>Recent Activity</h2>
        </div>

        <div class="dash-activity-item">
          <div class="dash-activity-icon">
            <i class="fa-solid fa-user-plus"></i>
          </div>
          <div class="dash-activity-content">
            <div class="dash-activity-title">Account Created</div>
            <div class="dash-activity-time">
              {{ formatDate(authStore.userProfile.createdAt, 'full') }}
            </div>
          </div>
        </div>

        <div class="dash-activity-item">
          <div class="dash-activity-icon">
            <i class="fa-solid fa-user-check"></i>
          </div>
          <div class="dash-activity-content">
            <div class="dash-activity-title">Profile Completed</div>
            <div class="dash-activity-time">
              {{ formatDate(authStore.userProfile.updatedAt, 'full') }}
            </div>
          </div>
        </div>

        <div class="dash-activity-item">
          <div class="dash-activity-icon">
            <i class="fa-solid fa-cog"></i>
          </div>
          <div class="dash-activity-content">
            <div class="dash-activity-title">Admin Role Assigned</div>
            <div class="dash-activity-time">
              {{ formatDate(authStore.userProfile.createdAt, 'full') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/useAuthStore'
import { formatDate } from '@/utils/helper'

const authStore = useAuthStore()

const fullName = computed(() => {
  if (authStore?.userProfile) {
    return `${authStore?.userProfile?.firstName} ${authStore?.userProfile?.lastName}`
  } else {
    return ''
  }
})

const stateComaCountry = computed(() => {
  if (authStore?.userProfile) {
    return `${authStore?.userProfile?.address?.state}, ${authStore?.userProfile?.address?.country}`
  } else {
    return ''
  }
})

const getFirstLetter = computed(() => {
  if (authStore?.userProfile) {
    const ffl = authStore?.userProfile?.firstName?.[0]
    const lfl = authStore?.userProfile?.lastName?.[0]
    return ffl + lfl
  } else {
    return ''
  }
})
</script>
