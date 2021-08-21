<template>
	<el-dialog class="confirm" :center="true" :title="title" :visible.sync="isShow" :show-close="false" width="440px" :close-on-click-modal="false">
		<span v-if="!selectItem">
			<i class="el-icon-delete"></i> {{message}}
		</span>
		<span slot="footer" class="dialog-footer">
			<el-button class="custom" type="primary" @click="okClick">确定</el-button>
			<el-button class="custom" type="primary" @click="cancleClick">取消</el-button>
		</span>
	</el-dialog>
</template>
<script>
export default {
	name: 'confirm',
	props: {
		isShow: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: '删除'
		},
		message: {
			type: String,
			default: '确认删除选中数据？'
		},
		okClick: {
			type: Function
		},
		cancleClick: {
			type: Function
		},
		// 是否有选项
		selectItem: {
			type: Boolean,
			default: false
		},
		selectMessage: {
			type: Array,
			default() {
				return ['', '', ''];
			}
		}
	}
};
</script>