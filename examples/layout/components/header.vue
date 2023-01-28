<template>
  <div class="gwin-platform-header">
    <div class="gwin-platform-header__logo" @click="router.push('/')">
      <img src="@/assets/svg/logo.svg" />运营管理后台
    </div>
    <div class="gwin-platform-header__operate">
      <!-- left图标 -->
      <div></div>
      <!-- right图标 -->
      <div>
        <!-- 账户 -->
        <div>
          <el-dropdown>
            <span class="el-dropdown-link gwin-platform-header__name">
              <img src="@/assets/img/user.png" alt="" />
              {{ realName }}
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="quit">
                  <svg-icon class-name="icon" icon-class="Icon-Logout"></svg-icon>退出登录
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const realName = '万亚坤'

const quit = () => {
  localStorage.clear()
  router.push('/login')
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';

@include b('header') {
  display: flex;
  align-items: center;
  @include e('logo') {
    width: 220px;
    height: 50px;
    background: #2a2f37;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      width: 45px;
    }
  }
  @include e('operate') {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    padding: 0 20px;
    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
    :deep(svg) {
      padding-right: 10px;
    }
  }

  @include e('name') {
    display: flex;
    align-items: center;
  }
}
</style>
