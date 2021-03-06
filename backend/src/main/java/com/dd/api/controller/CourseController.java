package com.dd.api.controller;

import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dd.api.dto.response.CourseGetListWrapperResponseDTO;
import com.dd.api.dto.response.CourseResponseDTO;
import com.dd.api.service.CourseService;
import com.dd.common.model.BaseResponseDto;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;

@Api(value = "수업 API", tags = { "Course" })
@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/course")
public class CourseController {

	private final CourseService courseService;

	@ApiOperation(value = "수업 조회")
	@GetMapping("/{courseId}")
	public ResponseEntity<? extends BaseResponseDto> getCourse(@ApiParam(value = "수업 ID") @PathVariable UUID courseId) {

		System.out.println("CourseController getCourse : " + courseId);

		CourseResponseDTO courseResponseDTO = courseService.getCourse(courseId);

		if (courseResponseDTO == null)
			return ResponseEntity.status(409).body(BaseResponseDto.of(409, "Fail"));

		return ResponseEntity.ok(CourseResponseDTO.of(200, "Success", courseResponseDTO));

	}

	@ApiOperation(value = "수업 목록 조회")
	@GetMapping
	public ResponseEntity<? extends BaseResponseDto> getCourseList() {

		System.out.println("CourseController getCourseList");

		CourseGetListWrapperResponseDTO courseGetListWrapperResponseDTO = courseService.getCourseList();

		if (courseGetListWrapperResponseDTO == null)
			return ResponseEntity.status(409).body(BaseResponseDto.of(409, "Fail"));

		return ResponseEntity.ok(CourseGetListWrapperResponseDTO.of(200, "Success", courseGetListWrapperResponseDTO));

	}

}
