package com.dd.api.dto.response;

import com.dd.common.model.BaseResponseDto;
import com.dd.db.entity.user.User;
import com.dd.db.entity.user.UserDepartment;
import com.dd.db.enums.Code;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@ApiModel("ProfileResponseDto")
public class ProfileResponseDto extends BaseResponseDto {

	@ApiModelProperty(name="유저 정보 - 이름")
	private String userName;
	
	@ApiModelProperty(name="소속 정보 - 학교명")
	private String schoolName;
	@ApiModelProperty(name="소속 정보 - 학년코드")
	private Code gradeCode;
	@ApiModelProperty(name="소속 정보 - 반코드")
	private Code classCode;
	@ApiModelProperty(name="소속 정보 - 번호")
	private Integer studentNo;
	@ApiModelProperty(name="소속 정보 - 회원코드")
	private Code userCode;
	
	@ApiModelProperty(name="파일 - 프로필 이미지")
	private String fileName;
	
	@Builder
	public ProfileResponseDto(User user, UserDepartment userDepartment, String fileName) {
		this.userName = user.getUserName();
		this.schoolName = userDepartment.getSchool().getSchoolName();
		this.gradeCode = userDepartment.getGradeCode();
		this.classCode = userDepartment.getClassCode();
		this.studentNo = userDepartment.getStudentNo();
		this.userCode = userDepartment.getUserCode();
		this.fileName = fileName;
	}
	
	public static ProfileResponseDto of(Integer statusCode, String message, ProfileResponseDto profileResponseDto) {
		ProfileResponseDto res = profileResponseDto;
		res.setStatusCode(statusCode);
		res.setMessage(message);
		
		return res;
	}
}
